"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, Sparkles, Environment } from "@react-three/drei";
import { Suspense, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

export type RoastLevel = "light" | "medium" | "dark";

const roastProfiles: Record<
  RoastLevel,
  {
    name: string;
    english: string;
    temp: string;
    crack: string;
    colorHex: string;
    roughness: number;
    metalness: number;
    clearcoat: number;
    smokeDensity: number;
    acid: number;
    sweetness: number;
    body: number;
    bitterness: number;
    desc: string;
    bestFor: string;
  }
> = {
  light: {
    name: "Rang Nhạt",
    english: "Light Roast (City)",
    temp: "196°C - 205°C",
    crack: "Nổ lần 1 (First Crack)",
    colorHex: "#B87333",
    roughness: 0.65,
    metalness: 0.05,
    clearcoat: 0.1,
    smokeDensity: 5,
    acid: 5,
    sweetness: 4,
    body: 2,
    bitterness: 1,
    desc: "Giữ lại acid tự nhiên sáng, hương hoa quả tươi mát. Bề mặt hạt khô mộc mạc, không bám dầu.",
    bestFor: "Pour Over, Chemex, Drip V60, Cold Brew thanh mát",
  },
  medium: {
    name: "Rang Vừa",
    english: "Medium Roast (Full City)",
    temp: "210°C - 218°C",
    crack: "Giữa nổ lần 1 & 2",
    colorHex: "#4A2511",
    roughness: 0.38,
    metalness: 0.1,
    clearcoat: 0.45,
    smokeDensity: 15,
    acid: 3,
    sweetness: 5,
    body: 4,
    bitterness: 3,
    desc: "Cân bằng hoàn hảo giữa vị ngọt caramel, đắng nhẹ và hậu vị kéo dài. Hạt chớm mịn bóng.",
    bestFor: "Phin truyền thống, Espresso gia đình, Cà phê sữa",
  },
  dark: {
    name: "Rang Đậm",
    english: "Dark Roast (Vienna / French)",
    temp: "225°C - 235°C",
    crack: "Nổ lần 2 (Second Crack)",
    colorHex: "#1A0C06",
    roughness: 0.2,
    metalness: 0.22,
    clearcoat: 0.85,
    smokeDensity: 35,
    acid: 1,
    sweetness: 3,
    body: 5,
    bitterness: 5,
    desc: "Vị đắng đậm đà quyến rũ, thể đậm (body) dày, thoảng hương khói gỗ thơm. Bề mặt hạt bóng bẩy lớp tinh dầu.",
    bestFor: "Cà phê Sữa Đá đậm đà, Bạc xỉu, Phin đặc",
  },
};

function useCoffeeBeanGeometry() {
  return useMemo(() => {
    const geom = new THREE.SphereGeometry(0.5, 64, 64);
    const pos = geom.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      y *= 1.38;
      const radiusAtY = Math.cos((y / 1.38) * Math.PI * 0.45);
      const taper = 0.82 + 0.18 * radiusAtY;
      x *= taper;
      z *= taper * 0.65;

      if (z > 0.02) {
        const sCurve = Math.sin(y * 2.2) * 0.07;
        const distFromCrease = Math.abs(x - sCurve);

        if (distFromCrease < 0.15) {
          const indent = Math.pow((0.15 - distFromCrease) / 0.15, 1.5) * 0.18;
          z -= indent;
          x += (sCurve - x) * 0.35;
        }
      }

      const noise =
        (Math.sin(x * 14) + Math.cos(y * 12) + Math.sin(z * 16)) * 0.008;
      x += noise;
      y += noise;
      z += noise;

      pos.setXYZ(i, x, y, z);
    }

    geom.computeVertexNormals();
    return geom;
  }, []);
}

function useChaffLineGeometry() {
  return useMemo(() => {
    const points: THREE.Vector3[] = [];
    const steps = 30;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps - 0.5) * 1.2;
      const x = Math.sin(t * 2.2) * 0.07;
      const y = t * 1.05;
      const z = 0.06 - Math.pow(Math.abs(t), 2) * 0.03;
      points.push(new THREE.Vector3(x, y, z));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 32, 0.015, 8, false);
  }, []);
}

// Smoke particles when roasting
function RoastSmoke({ density }: { density: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      child.position.y += delta * (0.3 + (i % 3) * 0.15);
      if (child.position.y > 2.2) {
        child.position.y = 0.2;
      }
      child.rotation.z += delta * 0.3;
    });
  });

  const smokeCount = Math.min(density, 20);

  return (
    <group ref={groupRef}>
      {Array.from({ length: smokeCount }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 1.5) * 0.4,
            0.2 + (i / smokeCount) * 1.8,
            Math.cos(i * 1.5) * 0.4,
          ]}
        >
          <sphereGeometry args={[0.08 + (i % 3) * 0.05, 16, 16]} />
          <meshBasicMaterial
            color="#D4A373"
            transparent
            opacity={0.06 + (i % 2) * 0.04}
          />
        </mesh>
      ))}
    </group>
  );
}

// 3D Single Coffee Bean for Roasting view
function RoastingBeanModel({ level }: { level: RoastLevel }) {
  const profile = roastProfiles[level];
  const groupRef = useRef<THREE.Group>(null);
  const beanGeom = useCoffeeBeanGeometry();
  const chaffGeom = useChaffLineGeometry();

  const beanColor = useMemo(
    () => new THREE.Color(profile.colorHex),
    [profile.colorHex]
  );
  const chaffColor = useMemo(
    () => new THREE.Color("#D4B28C"),
    []
  );

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.25;
    groupRef.current.rotation.x += delta * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} position={[0, 0, 0]} scale={1.8}>
        {/* Main Bean Body */}
        <mesh geometry={beanGeom} castShadow receiveShadow>
          <meshPhysicalMaterial
            color={beanColor}
            roughness={profile.roughness}
            metalness={profile.metalness}
            clearcoat={profile.clearcoat}
            clearcoatRoughness={0.2}
            envMapIntensity={2}
          />
        </mesh>
        {/* Chaff Line inside crease */}
        <mesh geometry={chaffGeom}>
          <meshStandardMaterial
            color={chaffColor}
            roughness={0.7}
            metalness={0.05}
          />
        </mesh>
        <RoastSmoke density={profile.smokeDensity} />
      </group>
    </Float>
  );
}

export function BeanRoasting3D() {
  const [level, setLevel] = useState<RoastLevel>("medium");
  const profile = roastProfiles[level];

  return (
    <div className="relative w-full rounded-[2rem] border border-primary/10 bg-surface-card/90 p-6 shadow-lift backdrop-blur-md md:p-8">
      <div className="mb-6 flex flex-col gap-2 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Mô phỏng 3D Rang Xay
        </span>
        <h3 className="font-primary text-2xl font-bold text-primary sm:text-3xl">
          Tùy Chỉnh Cấp Độ Rang Cà Phê
        </h3>
        <p className="text-sm text-secondary">
          Xem sự thay đổi màu sắc, độ bóng và hương vị hạt cà phê theo từng cúp nhiệt độ rang.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* 3D Canvas Showcase */}
        <div className="relative h-[360px] w-full rounded-2xl bg-gradient-to-b from-primary/5 via-primary/10 to-primary/20 shadow-inner lg:col-span-6">
          <Canvas camera={{ position: [0, 0.5, 3.8], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 5, 4]} intensity={1.6} castShadow color="#FFF2E2" />
            <pointLight position={[-3, 1, -2]} intensity={0.8} color={profile.colorHex} />
            <spotLight position={[0, 4, 2]} intensity={0.9} color="#FF9F1C" angle={0.6} />
            <Environment preset="city" />

            <Suspense fallback={null}>
              <RoastingBeanModel level={level} />
              <Sparkles count={20} scale={3} size={1.6} color="#E9C46A" opacity={0.4} />
              <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={5} blur={2.0} />
            </Suspense>

            <OrbitControls enableZoom={false} autoRotate={false} />
          </Canvas>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#1F1510]/80 px-4 py-1.5 text-xs text-white backdrop-blur-sm shadow-soft">
            <span>Kéo xoay 3D hạt cà phê</span>
          </div>
        </div>

        {/* Control & Flavor Metrics */}
        <div className="flex flex-col gap-6 lg:col-span-6">
          {/* Level Switcher */}
          <div className="flex rounded-xl bg-cream-deep/40 p-1.5 ring-1 ring-primary/10">
            {(["light", "medium", "dark"] as RoastLevel[]).map((lvl) => {
              const active = level === lvl;
              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setLevel(lvl)}
                  className={`flex-1 rounded-lg py-2.5 text-xs font-bold transition-all ${
                    active
                      ? "bg-[#1F1510] dark:bg-accent text-white shadow-soft"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {roastProfiles[lvl].name}
                </button>
              );
            })}
          </div>

          {/* Flavor Profile Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={level}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 rounded-2xl border border-primary/10 bg-primary/5 p-5"
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h4 className="font-primary text-xl font-bold text-primary">
                    {profile.name}
                  </h4>
                  <p className="text-xs text-secondary font-medium">{profile.english}</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-semibold text-accent">{profile.temp}</span>
                  <span className="text-[11px] text-muted">{profile.crack}</span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-secondary">{profile.desc}</p>

              {/* Taste Radar Ratings */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { label: "Vị Chua Thanh (Acid)", score: profile.acid, color: "bg-amber-500" },
                  { label: "Vị Ngọt (Sweetness)", score: profile.sweetness, color: "bg-orange-500" },
                  { label: "Thể Đậm (Body)", score: profile.body, color: "bg-amber-700" },
                  { label: "Vị Đắng (Bitterness)", score: profile.bitterness, color: "bg-amber-900" },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-secondary">
                      <span>{item.label}</span>
                      <span>{item.score}/5</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-cream-deep">
                      <div
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${(item.score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-surface-card p-3 border border-cream-deep/60 text-xs">
                <span className="font-bold text-primary">Phù hợp nhất cho: </span>
                <span className="text-secondary">{profile.bestFor}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
