"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, Sparkles, Html, Environment, MeshTransmissionMaterial, RoundedBox } from "@react-three/drei";
import { Suspense, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

export type DrinkType = "phin" | "caphesua" | "bacxiu" | "ca-phe-den";

const drinkDetails: Record<
  DrinkType,
  {
    name: string;
    sub: string;
    desc: string;
    price: string;
    coffeeRatio: number; // 0 to 1
    milkRatio: number; // 0 to 1
    hasPhin: boolean;
    hasIce: boolean;
    colorCoffee: string;
    colorMilk: string;
  }
> = {
  phin: {
    name: "Cà Phê Phin Nóng",
    sub: "Pha Phin Truyền Thống",
    desc: "Cà phê Robusta & Arabica đậm đà chiết xuất chậm từ Phin nhôm truyền thống, giữ trọn hương vị nguyên bản.",
    price: "15.000đ",
    coffeeRatio: 0.65,
    milkRatio: 0.0,
    hasPhin: true,
    hasIce: false,
    colorCoffee: "#2A1508",
    colorMilk: "#FFFFFF",
  },
  caphesua: {
    name: "Cà Phê Sữa Đá",
    sub: "Đậm Đà Chuẩn Viễn Tây",
    desc: "Sự kết hợp hoàn hảo giữa cốt cà phê phin sánh đậm và sữa đặc béo ngậy cùng đá mát lạnh.",
    price: "18.000đ",
    coffeeRatio: 0.45,
    milkRatio: 0.25,
    hasPhin: false,
    hasIce: true,
    colorCoffee: "#3D2314",
    colorMilk: "#F7E7CE",
  },
  bacxiu: {
    name: "Bạc Xỉu Sài Gòn",
    sub: "Thơm Ngậy Ngọt Dịu",
    desc: "Nhiều sữa ít cà phê — lớp sữa đặc ngọt béo thơm ngậy điểm xuyết lớp cà phê phin thanh nhẹ.",
    price: "18.000đ",
    coffeeRatio: 0.25,
    milkRatio: 0.5,
    hasPhin: false,
    hasIce: true,
    colorCoffee: "#5C3A21",
    colorMilk: "#FFF5E4",
  },
  "ca-phe-den": {
    name: "Cà Phê Đen Đá",
    sub: "Độ Đậm Tuyệt Đối",
    desc: "Cà phê đen nguyên chất không đường, mộc mạc và sảng khoái với đá lạnh.",
    price: "15.000đ",
    coffeeRatio: 0.7,
    milkRatio: 0.0,
    hasPhin: false,
    hasIce: true,
    colorCoffee: "#1A0B05",
    colorMilk: "#FFFFFF",
  },
};

// Procedural 3D Ice Cube
function IceCube({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <RoundedBox args={[0.32, 0.32, 0.32]} radius={0.06} smoothness={2} position={position} rotation={rotation} castShadow>
      <meshPhysicalMaterial
        color="#F0F8FF"
        transmission={0.95}
        opacity={1}
        transparent
        roughness={0.05}
        ior={1.31}
        thickness={0.5}
        envMapIntensity={2}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </RoundedBox>
  );
}

// Animated Phin Filter Drips
function PhinDrips({ active }: { active: boolean }) {
  const dripRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!dripRef.current || !active) return;
    const t = (state.clock.elapsedTime * 2.2) % 1;
    dripRef.current.position.y = 1.05 - t * 0.75;
    const mat = dripRef.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 1 - t * 0.7;
  });

  if (!active) return null;

  return (
    <mesh ref={dripRef} position={[0, 1.05, 0]}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshBasicMaterial color="#2B1408" transparent opacity={0.9} />
    </mesh>
  );
}

// Animated Steam Particles
function SteamEffect({ active }: { active: boolean }) {
  const steamRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!steamRef.current || !active) return;
    steamRef.current.children.forEach((child, i) => {
      child.position.y += delta * 0.4 * (1 + i * 0.2);
      if (child.position.y > 2.2) {
        child.position.y = 1.1;
      }
      child.rotation.z += delta * 0.5;
    });
  });

  if (!active) return null;

  return (
    <group ref={steamRef}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[(i - 1.5) * 0.12, 1.1 + i * 0.25, 0]}>
          <sphereGeometry args={[0.12 + i * 0.03, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.12 - i * 0.02} />
        </mesh>
      ))}
    </group>
  );
}

// 3D Glass Cup & Phin Model Scene
function CupModel({
  drink,
  showIce,
  showSteam,
}: {
  drink: DrinkType;
  showIce: boolean;
  showSteam: boolean;
}) {
  const info = drinkDetails[drink];
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const scale = viewport.width < 5 ? 0.75 : 1;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
  });

  // Calculate liquid heights inside glass
  const milkHeight = info.milkRatio * 1.2;
  const coffeeHeight = info.coffeeRatio * 1.2;

  return (
    <group ref={groupRef} position={[0, -0.4 * scale, 0]} scale={scale}>
      {/* Outer Glass Cup */}
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.82, 0.68, 1.3, 32, 1, false]} />
        <MeshTransmissionMaterial
          backside={false}
          samples={2}
          thickness={0.2}
          chromaticAberration={0}
          anisotropy={0}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.0}
          color="#FFFFFF"
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={1}
          roughness={0.05}
          ior={1.5}
        />
      </mesh>

      {/* Glass Base Bottom */}
      <mesh position={[0, -0.02, 0]} castShadow>
        <cylinderGeometry args={[0.68, 0.65, 0.08, 32]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transmission={0.9}
          opacity={1}
          transparent
          roughness={0.1}
          ior={1.5}
          thickness={2}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Bottom Milk Layer (if applicable) */}
      {info.milkRatio > 0 && (
        <mesh position={[0, milkHeight / 2, 0]}>
          <cylinderGeometry args={[0.7, 0.66, milkHeight, 32]} />
          <meshPhysicalMaterial
            color={info.colorMilk}
            roughness={0.1}
            metalness={0.05}
            transmission={0.6}
            thickness={1.5}
            attenuationColor={info.colorMilk}
            attenuationDistance={0.5}
            envMapIntensity={1}
          />
        </mesh>
      )}

      {/* Coffee Layer */}
      {info.coffeeRatio > 0 && (
        <mesh position={[0, milkHeight + coffeeHeight / 2, 0]}>
          <cylinderGeometry
            args={[
              0.7 + (info.coffeeRatio + info.milkRatio) * 0.08,
              0.68 + info.milkRatio * 0.04,
              coffeeHeight,
              32,
            ]}
          />
          <meshPhysicalMaterial
            color={info.colorCoffee}
            roughness={0.1}
            metalness={0.05}
            transmission={0.8}
            thickness={2}
            attenuationColor={info.colorCoffee}
            attenuationDistance={0.2}
            envMapIntensity={1.5}
          />
        </mesh>
      )}

      {/* Top Crema / Foam Disk */}
      <mesh position={[0, milkHeight + coffeeHeight, 0]}>
        <cylinderGeometry args={[0.78, 0.77, 0.04, 32]} />
        <meshStandardMaterial
          color={info.milkRatio > 0.4 ? "#F4E0C7" : "#8C542B"}
          roughness={0.6}
        />
      </mesh>

      {/* Floating 3D Ice Cubes */}
      {(info.hasIce || showIce) && (
        <group position={[0, milkHeight + coffeeHeight - 0.05, 0]}>
          <IceCube position={[-0.22, 0.15, 0.1]} rotation={[0.4, 0.3, 0.2]} />
          <IceCube position={[0.2, 0.22, -0.12]} rotation={[-0.2, 0.6, 0.1]} />
          <IceCube position={[0.02, 0.32, 0.18]} rotation={[0.1, -0.4, 0.5]} />
        </group>
      )}

      {/* Traditional 3D Phin Coffee Filter */}
      {info.hasPhin && (
        <group position={[0, 1.4, 0]}>
          {/* Phin Plate Base */}
          <mesh position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.95, 0.95, 0.03, 32]} />
            <meshStandardMaterial
              color="#A3B18A"
              metalness={0.95}
              roughness={0.15}
              envMapIntensity={2}
            />
          </mesh>
          {/* Phin Main Chamber Body */}
          <mesh position={[0, 0.32, 0]} castShadow>
            <cylinderGeometry args={[0.62, 0.55, 0.6, 32]} />
            <meshStandardMaterial
              color="#D4A373"
              metalness={0.95}
              roughness={0.1}
              envMapIntensity={2}
            />
          </mesh>
          {/* Phin Rim */}
          <mesh position={[0, 0.63, 0]}>
            <torusGeometry args={[0.63, 0.025, 16, 32]} />
            <meshStandardMaterial color="#E9C46A" metalness={1} roughness={0.1} envMapIntensity={2.5} />
          </mesh>
          {/* Phin Lid Knob */}
          <mesh position={[0, 0.72, 0]} castShadow>
            <cylinderGeometry args={[0.64, 0.64, 0.05, 32]} />
            <meshStandardMaterial color="#D4A373" metalness={0.95} roughness={0.15} envMapIntensity={2} />
          </mesh>
          <mesh position={[0, 0.82, 0]} castShadow>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#E9C46A" metalness={1} roughness={0.1} envMapIntensity={2.5} />
          </mesh>
        </group>
      )}

      <PhinDrips active={info.hasPhin} />
      <SteamEffect active={showSteam || info.hasPhin} />
    </group>
  );
}

export function CoffeeCup3D() {
  const [selectedDrink, setSelectedDrink] = useState<DrinkType>("caphesua");
  const [showIce, setShowIce] = useState(true);
  const [showSteam, setShowSteam] = useState(false);

  const activeInfo = drinkDetails[selectedDrink];

  return (
    <div className="relative w-full rounded-[2rem] border border-cream-deep/40 bg-surface-card/80 p-6 shadow-lift backdrop-blur-md md:p-8">
      <div className="mb-6 flex flex-col gap-2 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Trải nghiệm 3D Tương tác
        </span>
        <h3 className="font-primary text-2xl font-bold text-primary sm:text-3xl">
          Khám Phá Hương Vị Cà Phê 3D
        </h3>
        <p className="text-sm text-secondary">
          Xoay, phóng to mô hình 3D và tùy chọn loại cà phê theo sở thích của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* 3D Canvas Area */}
        <div className="relative h-[380px] w-full rounded-2xl bg-gradient-to-b from-primary/5 via-primary/10 to-primary/20 shadow-inner lg:col-span-7">
          <Canvas
            camera={{ position: [0, 1.2, 4.2], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[4, 6, 5]} intensity={0.8} castShadow color="#FFF2E2" />
            <pointLight position={[-4, 2, -2]} intensity={0.4} color="#D4A373" />
            <spotLight position={[0, 6, 2]} intensity={0.6} color="#FFD166" angle={0.5} />
            <Environment preset="city" />

            <Suspense fallback={null}>
              <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
                <CupModel
                  drink={selectedDrink}
                  showIce={showIce}
                  showSteam={showSteam}
                />
              </Float>
              <Sparkles count={15} scale={4} size={1.5} color="#D4A373" opacity={0.4} />
              <ContactShadows position={[0, -1.05, 0]} opacity={0.4} scale={6} blur={2.2} resolution={256} />
            </Suspense>

            <OrbitControls
              enableZoom={true}
              minDistance={2.5}
              maxDistance={6}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2 + 0.1}
              autoRotate={false}
            />
          </Canvas>

          {/* Interactive Hint */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#1F1510]/80 px-4 py-1.5 text-xs text-white backdrop-blur-sm shadow-soft">
            <svg
              className="h-4 w-4 animate-spin text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Kéo để xoay 360° • Cuộn để phóng to</span>
          </div>
        </div>

        {/* Drink Controls & Information */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          {/* Drink Selector Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            {(Object.keys(drinkDetails) as DrinkType[]).map((key) => {
              const active = selectedDrink === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedDrink(key)}
                  className={`flex flex-col items-start rounded-xl p-3.5 text-left transition-all ${
                    active
                      ? "bg-[#1F1510] dark:bg-accent text-white shadow-lift ring-2 ring-accent"
                      : "bg-surface-card hover:bg-cream-deep/30 text-primary border border-cream-deep/40"
                  }`}
                >
                  <span className="text-xs font-medium opacity-85">
                    {drinkDetails[key].sub}
                  </span>
                  <span className="font-primary text-base font-bold">
                    {drinkDetails[key].name}
                  </span>
                  <span
                    className={`mt-1 text-xs font-semibold ${
                      active ? "text-accent" : "text-secondary"
                    }`}
                  >
                    {drinkDetails[key].price}
                  </span>
                </button>
              );
            })}
          </div>



          {/* Toggles */}
          <div className="flex flex-wrap gap-4">
            <label className="flex cursor-pointer items-center gap-2 rounded-xl bg-surface-card px-4 py-2 text-xs font-semibold text-primary border border-cream-deep/40 shadow-sm hover:border-accent">
              <input
                type="checkbox"
                checked={showIce}
                onChange={(e) => setShowIce(e.target.checked)}
                className="h-4 w-4 accent-accent rounded"
              />
              <span>🧊 Thêm Đá Viên 3D</span>
            </label>

            <label className="flex cursor-pointer items-center gap-2 rounded-xl bg-surface-card px-4 py-2 text-xs font-semibold text-primary border border-cream-deep/40 shadow-sm hover:border-accent">
              <input
                type="checkbox"
                checked={showSteam}
                onChange={(e) => setShowSteam(e.target.checked)}
                className="h-4 w-4 accent-accent rounded"
              />
              <span>💨 Hiệu ứng Khói Nóng</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
