"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Sparkles, Environment } from "@react-three/drei";
import { Suspense, useMemo, useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import type { Group } from "three";
import * as THREE from "three";

type BeanConfig = {
  baseX: number;
  baseY: number;
  baseZ: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  scale: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitPhase: number;
  tumbleSpeedX: number;
  tumbleSpeedY: number;
  tumbleSpeedZ: number;
  scrollFactorY: number;
  scrollFactorRot: number;
  hue: number;
  lightness: number;
};

// Generates an authentic realistic procedural 3D coffee bean geometry
function useCoffeeBeanGeometry() {
  return useMemo(() => {
    const geom = new THREE.SphereGeometry(0.5, 96, 96);
    const pos = geom.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      // 1. Oval elongation along Y axis (coffee bean oblong proportion ~ 1.55)
      y *= 1.52;

      // 2. Natural taper towards bean tips with subtle asymmetric curvature
      const normalizedY = y / 1.52; // -0.5 to 0.5
      const profileRadius = Math.cos(normalizedY * Math.PI * 0.44);
      const taper = 0.76 + 0.24 * profileRadius;
      x *= taper;

      // Flatten Z axis: front face is relatively flat with deep crease, back is domed convex
      z *= taper * 0.68;

      // 3. Deep sculpted S-crease & split on front face (z > 0)
      if (z > 0.01) {
        // Subtle organic S-curve longitudinal offset
        const sCurve = Math.sin(y * 2.1) * 0.07 + Math.cos(y * 4.2) * 0.015;
        const distFromCrease = Math.abs(x - sCurve);

        // Crease valley width
        const creaseRadius = 0.17;
        if (distFromCrease < creaseRadius) {
          // Deep inward fold carving towards the bean center
          const t = distFromCrease / creaseRadius;
          const indent = (1 - Math.pow(t, 1.8)) * 0.28;
          z -= indent;

          // Pull vertices slightly inward towards the cleft seam
          x += (sCurve - x) * 0.42 * (1 - t);
        } else {
          // Slight rounded roll on both sides of the crease (the bean lobes)
          const lobeT = Math.min(1, (distFromCrease - creaseRadius) / 0.25);
          z += Math.sin(lobeT * Math.PI) * 0.04;
        }
      } else {
        // Convex bean back with rounded smooth dome
        z *= 1.22;
        // Subtle longitudinal shallow spine depression on back
        const spineDist = Math.abs(x);
        if (spineDist < 0.15) {
          z += (0.15 - spineDist) * 0.05;
        }
      }

      // 4. Subtle roasted micro-surface variation
      const microNoise =
        (Math.sin(x * 24 + y * 12) +
          Math.cos(y * 22 + z * 16) +
          Math.sin(z * 20 + x * 10)) *
        0.007;
      x += microNoise;
      y += microNoise * 0.8;
      z += microNoise;

      pos.setXYZ(i, x, y, z);
    }

    geom.computeVertexNormals();
    return geom;
  }, []);
}

// Inner chaff seam geometry (the golden-tan silver skin line inside the roasted bean)
function useChaffLineGeometry() {
  return useMemo(() => {
    const points: THREE.Vector3[] = [];
    const steps = 32;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps - 0.5) * 1.28;
      const x = Math.sin(t * 2.3) * 0.08;
      const y = t * 1.1;
      const z = 0.055 - Math.pow(Math.abs(t), 2) * 0.04;
      points.push(new THREE.Vector3(x, y, z));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 36, 0.017, 8, false);
  }, []);
}

function IndividualBean({
  config,
  beanGeom,
  chaffGeom,
  scrollOffset,
  pointer,
}: {
  config: BeanConfig;
  beanGeom: THREE.BufferGeometry;
  chaffGeom: THREE.BufferGeometry;
  scrollOffset: { current: number };
  pointer: { x: number; y: number };
}) {
  const meshGroup = useRef<Group>(null);

  const beanColor = useMemo(
    () => new THREE.Color().setHSL(config.hue, 0.62, config.lightness),
    [config.hue, config.lightness],
  );
  const chaffColor = useMemo(() => new THREE.Color("#E2C49C"), []);

  useFrame((state, delta) => {
    if (!meshGroup.current) return;
    const time = state.clock.getElapsedTime();
    const scroll = scrollOffset.current;

    // 1. Fluid organic floating motion (multi-harmonic orbital wave)
    const orbitAngle = time * config.orbitSpeed + config.orbitPhase;
    const floatY =
      Math.sin(orbitAngle) * config.orbitRadius +
      Math.cos(orbitAngle * 1.7) * (config.orbitRadius * 0.35);
    const floatX =
      Math.cos(orbitAngle * 0.85) * (config.orbitRadius * 0.85) +
      Math.sin(orbitAngle * 0.4) * (config.orbitRadius * 0.3);
    const floatZ = Math.sin(orbitAngle * 1.3) * (config.orbitRadius * 0.6);

    // 2. Interactive scroll dynamics:
    // Beans gracefully elevate and tumble faster when the user scrolls
    const scrollYShift = -(scroll * config.scrollFactorY);
    const scrollRotation = scroll * config.scrollFactorRot;

    // 3. Mouse pointer reactive parallax sway
    const mouseSwayX = pointer.x * (0.45 + config.scale * 0.35);
    const mouseSwayY = pointer.y * (0.35 + config.scale * 0.25);

    // Apply smoothly interpolated target positions
    const targetX = config.baseX + floatX + mouseSwayX;
    const targetY = config.baseY + floatY + scrollYShift - mouseSwayY;
    const targetZ = config.baseZ + floatZ;

    meshGroup.current.position.x = THREE.MathUtils.lerp(
      meshGroup.current.position.x,
      targetX,
      0.09,
    );
    meshGroup.current.position.y = THREE.MathUtils.lerp(
      meshGroup.current.position.y,
      targetY,
      0.09,
    );
    meshGroup.current.position.z = THREE.MathUtils.lerp(
      meshGroup.current.position.z,
      targetZ,
      0.09,
    );

    // Dynamic rotation: base continuous tumble + scroll-driven spin + mouse tilt
    meshGroup.current.rotation.x +=
      delta * config.tumbleSpeedX + pointer.y * delta * 0.2;
    meshGroup.current.rotation.y +=
      delta * config.tumbleSpeedY + pointer.x * delta * 0.3;
    meshGroup.current.rotation.z += delta * config.tumbleSpeedZ;
    meshGroup.current.rotation.y += scrollRotation * 0.0006;
    meshGroup.current.rotation.x += scrollRotation * 0.0003;
  });

  return (
    <group
      ref={meshGroup}
      position={[config.baseX, config.baseY, config.baseZ]}
      rotation={[config.rotX, config.rotY, config.rotZ]}
      scale={config.scale}
    >
      {/* Ultra realistic Physical material with clearcoat oily sheen & micro reflectivity */}
      <mesh geometry={beanGeom} castShadow receiveShadow>
        <meshPhysicalMaterial
          color={beanColor}
          roughness={0.35}
          metalness={0.05}
          clearcoat={0.2}
          clearcoatRoughness={0.3}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* Natural golden chaff line seam */}
      <mesh geometry={chaffGeom}>
        <meshStandardMaterial
          color={chaffColor}
          roughness={0.55}
          metalness={0.05}
        />
      </mesh>
    </group>
  );
}

// Particle Steam rising upwards gently
function SteamParticleSystem() {
  const count = 40;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 4.6;
      const y = -2.0 + Math.random() * 4.4;
      const z = (Math.random() - 0.5) * 2.6;
      const speed = 0.22 + Math.random() * 0.4;
      const scale = 0.12 + Math.random() * 0.18;
      temp.push({ x, y, z, speed, scale });
    }
    return temp;
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    particles.forEach((p, i) => {
      p.y += delta * p.speed;
      if (p.y > 3.2) {
        p.y = -2.0;
      }
      dummy.position.set(p.x + Math.sin(p.y * 2) * 0.2, p.y, p.z);
      const currentScale = p.scale * (1 + (p.y + 2.0) * 0.35);
      dummy.scale.set(currentScale, currentScale, currentScale);
      dummy.rotation.z += delta * 0.25;
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.34, 16, 16]} />
      <meshBasicMaterial
        color="#F7EDE2"
        transparent
        opacity={0.07}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}

const beanConfigs: BeanConfig[] = [
  // Front focal beans (large, distinct angles, lively movement)
  {
    baseX: -1.8,
    baseY: 0.5,
    baseZ: 0.4,
    rotX: 0.35,
    rotY: 0.55,
    rotZ: 0.2,
    scale: 1.15,
    orbitRadius: 0.16,
    orbitSpeed: 0.95,
    orbitPhase: 0,
    tumbleSpeedX: 0.25,
    tumbleSpeedY: 0.6,
    tumbleSpeedZ: 0.2,
    scrollFactorY: 0.0035,
    scrollFactorRot: 0.008,
    hue: 0.065,
    lightness: 0.15,
  },
  {
    baseX: 1.85,
    baseY: -0.1,
    baseZ: 0.2,
    rotX: -0.3,
    rotY: 0.8,
    rotZ: -0.15,
    scale: 1.02,
    orbitRadius: 0.14,
    orbitSpeed: 0.85,
    orbitPhase: 1.8,
    tumbleSpeedX: -0.2,
    tumbleSpeedY: 0.5,
    tumbleSpeedZ: 0.25,
    scrollFactorY: 0.003,
    scrollFactorRot: -0.007,
    hue: 0.075,
    lightness: 0.17,
  },
  {
    baseX: 0.3,
    baseY: 1.35,
    baseZ: 0.6,
    rotX: 0.5,
    rotY: -0.4,
    rotZ: 0.3,
    scale: 0.82,
    orbitRadius: 0.18,
    orbitSpeed: 1.1,
    orbitPhase: 3.2,
    tumbleSpeedX: 0.35,
    tumbleSpeedY: -0.55,
    tumbleSpeedZ: 0.18,
    scrollFactorY: 0.0042,
    scrollFactorRot: 0.009,
    hue: 0.06,
    lightness: 0.14,
  },
  {
    baseX: -0.65,
    baseY: -1.05,
    baseZ: 0.5,
    rotX: 0.15,
    rotY: 0.45,
    rotZ: -0.4,
    scale: 0.72,
    orbitRadius: 0.12,
    orbitSpeed: 0.9,
    orbitPhase: 4.5,
    tumbleSpeedX: 0.18,
    tumbleSpeedY: 0.45,
    tumbleSpeedZ: -0.22,
    scrollFactorY: 0.0028,
    scrollFactorRot: -0.006,
    hue: 0.08,
    lightness: 0.18,
  },
  // Midground & background supporting beans (depth perspective)
  {
    baseX: 2.35,
    baseY: 0.95,
    baseZ: -0.2,
    rotX: -0.4,
    rotY: -0.3,
    rotZ: 0.5,
    scale: 0.58,
    orbitRadius: 0.1,
    orbitSpeed: 0.75,
    orbitPhase: 2.2,
    tumbleSpeedX: -0.3,
    tumbleSpeedY: 0.4,
    tumbleSpeedZ: 0.3,
    scrollFactorY: 0.0022,
    scrollFactorRot: 0.005,
    hue: 0.088,
    lightness: 0.16,
  },
  {
    baseX: -2.45,
    baseY: -0.65,
    baseZ: -0.3,
    rotX: 0.6,
    rotY: 0.2,
    rotZ: -0.3,
    scale: 0.64,
    orbitRadius: 0.13,
    orbitSpeed: 0.8,
    orbitPhase: 0.9,
    tumbleSpeedX: 0.22,
    tumbleSpeedY: -0.42,
    tumbleSpeedZ: 0.18,
    scrollFactorY: 0.0025,
    scrollFactorRot: 0.006,
    hue: 0.07,
    lightness: 0.14,
  },
  {
    baseX: 0.95,
    baseY: -1.35,
    baseZ: -0.1,
    rotX: -0.25,
    rotY: 0.65,
    rotZ: 0.35,
    scale: 0.54,
    orbitRadius: 0.11,
    orbitSpeed: 0.7,
    orbitPhase: 5.1,
    tumbleSpeedX: 0.28,
    tumbleSpeedY: 0.38,
    tumbleSpeedZ: -0.15,
    scrollFactorY: 0.002,
    scrollFactorRot: -0.005,
    hue: 0.072,
    lightness: 0.19,
  },
  {
    baseX: -1.05,
    baseY: 1.55,
    baseZ: -0.25,
    rotX: 0.3,
    rotY: -0.5,
    rotZ: 0.25,
    scale: 0.48,
    orbitRadius: 0.09,
    orbitSpeed: 0.85,
    orbitPhase: 3.8,
    tumbleSpeedX: -0.25,
    tumbleSpeedY: 0.48,
    tumbleSpeedZ: 0.2,
    scrollFactorY: 0.0018,
    scrollFactorRot: 0.004,
    hue: 0.068,
    lightness: 0.15,
  },
  {
    baseX: 1.4,
    baseY: 1.5,
    baseZ: -0.4,
    rotX: 0.4,
    rotY: 0.3,
    rotZ: -0.2,
    scale: 0.42,
    orbitRadius: 0.08,
    orbitSpeed: 0.65,
    orbitPhase: 1.2,
    tumbleSpeedX: 0.2,
    tumbleSpeedY: -0.35,
    tumbleSpeedZ: 0.15,
    scrollFactorY: 0.0016,
    scrollFactorRot: -0.004,
    hue: 0.074,
    lightness: 0.16,
  },
];

function SceneContent() {
  const beanGeom = useCoffeeBeanGeometry();
  const chaffGeom = useChaffLineGeometry();
  const scrollOffset = useRef(0);
  const pointerPos = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  useEffect(() => {
    const onScroll = () => {
      scrollOffset.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state) => {
    pointerPos.current.x = state.pointer.x;
    pointerPos.current.y = state.pointer.y;
  });

  return (
    <>
      <ambientLight intensity={0.95} />
      {/* Warm Golden Key Sunlight */}
      <directionalLight
        position={[5.5, 7.5, 5]}
        intensity={3.2}
        castShadow
        color="#FFF0D4"
      />
      {/* Warm Rich Amber Fill Light */}
      <pointLight position={[-4, 2, 2]} intensity={1.8} color="#E89E5B" />
      {/* Striking Golden Rim Light from behind/edge for dramatic 3D contour */}
      <directionalLight
        position={[-4.5, 6, -4]}
        intensity={3.0}
        color="#FFCA60"
      />
      {/* Under-glow warmth bouncing from cup/table */}
      <pointLight position={[0, -3.2, 1.5]} intensity={1.2} color="#D48B47" />
      {/* Subtle Center Spotlight for depth */}
      <spotLight
        position={[0, 6, 3.5]}
        intensity={2.0}
        color="#FFF5E4"
        angle={0.65}
        penumbra={0.9}
      />
      <Environment preset="city" />

      {/* Floating 3D Beans System */}
      <group scale={isMobile ? 0.6 : 1}>
        {beanConfigs.map((cfg, idx) => (
          <IndividualBean
            key={idx}
            config={cfg}
            beanGeom={beanGeom}
            chaffGeom={chaffGeom}
            scrollOffset={scrollOffset}
            pointer={pointerPos.current}
          />
        ))}

        <SteamParticleSystem />
        <Sparkles
          count={65}
          scale={[7, 6, 5]}
          size={2.8}
          speed={0.65}
          color="#FFD166"
          opacity={0.6}
        />
      </group>

      <ContactShadows
        position={[0, -1.9, 0]}
        opacity={0.48}
        scale={14}
        blur={2.8}
        far={5}
      />
    </>
  );
}

type CoffeeBeansSceneProps = {
  className?: string;
};

export function CoffeeBeansScene({ className }: CoffeeBeansSceneProps) {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div className={className} aria-hidden style={{ pointerEvents: "none" }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.25, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
