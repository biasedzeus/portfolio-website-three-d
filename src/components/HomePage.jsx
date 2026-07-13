import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import MountainTerrain from "./MountainTerrain";
import SnowParticles from "./SnowParticles";
import TwilightSky from "./TwilightSky";

function CameraRig() {
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const scrollFactor = scrollYRef.current * 0.0008;

    const targetY = Math.max(2.8, 4.2 - scrollFactor * 0.4);
    const targetZ = 18.0 + scrollFactor + t * 0.35;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 0, 0.03);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.03);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.03);

    const lookAtY = THREE.MathUtils.lerp(2.0, 1.4, Math.min(scrollFactor * 0.2, 1.0));
    state.camera.lookAt(0, lookAtY, -10);
  });
  return null;
}

export default function HomePage({ onReady }) {
  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-[#000000] pointer-events-none">
      <Canvas
        camera={{ position: [0, 4, 18], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        className="w-full h-full"
      >
        {/* Wider atmospheric fog so mountains are clearly visible in the distance */}
        <fog attach="fog" args={["#000000", 15, 65]} />

        {/* Gradient sky dome */}
        <TwilightSky />

        {/* Muted white lighting to illuminate the wireframe grid */}
        <ambientLight intensity={0.12} color="#ffffff" />
        <directionalLight
          position={[-10, 15, -12]}
          intensity={0.8}
          color="#ffffff"
        />
        <directionalLight
          position={[6, 10, 6]}
          intensity={0.3}
          color="#ffffff"
        />
        <pointLight position={[-15, 6, -10]} intensity={0.25} color="#ffffff" />
        <pointLight position={[12, 3, -12]} intensity={0.1} color="#ffffff" />

        {/* Parallax camera rig */}
        <CameraRig />

        {/* Procedural wireframe mountain terrain */}
        <MountainTerrain onReady={onReady} />

        {/* Subtle space dust particles */}
        <SnowParticles />
      </Canvas>
    </div>
  );
}
