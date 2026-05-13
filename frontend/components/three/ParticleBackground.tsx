"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { useState, useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
// @ts-expect-error - maath/random doesn't have types
import * as random from "maath/random/dist/maath-random.esm";

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

import { ComponentPropsWithoutRef } from "react";
import * as THREE from "three";

function Stars(props: ComponentPropsWithoutRef<"group">) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00bfff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
