import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";
import { OrbitControls, Sparkles, Stars, Cloud } from "@react-three/drei";

const BlobShpere = () => {};

const Blob = () => {
  return (
    <Canvas camera={[0, 0, 10] }>
      <ambientLight intensity={0.2} />
      <OrbitControls />
      <Stars
        radius={10}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Cloud
        opacity={0.5}
        speed={1.4} // Rotation speed
        width={1} // Width of the full cloud
        depth={1} // Z-dir depth
        segments={20}

        // Number of particles
      />
    </Canvas>
  );
};

export default Blob;
