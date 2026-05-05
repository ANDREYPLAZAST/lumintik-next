"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { cn } from "@/lib/cn";

function GlassShape() {
  const ref = useRef<Group>(null);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.32;
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusKnotGeometry args={[0.9, 0.32, 200, 32]} />
        <meshPhysicalMaterial
          color="#1e6bff"
          metalness={0.2}
          roughness={0.15}
          transmission={0.85}
          thickness={1.2}
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.2}
        />
      </mesh>
    </group>
  );
}

export type HeroGlassProps = {
  className?: string;
};

export function HeroGlass({ className }: Readonly<HeroGlassProps>) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none [contain:layout_paint_size]",
        className,
      )}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 2]} intensity={1.6} color="#93c5fd" />
        <directionalLight position={[-3, -2, -2]} intensity={1} color="#1d4ed8" />
        <pointLight position={[0, 0, 4]} intensity={1.2} color="#ffffff" />
        <GlassShape />
      </Canvas>
    </div>
  );
}
