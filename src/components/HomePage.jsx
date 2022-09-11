import ReactDOM from "react-dom";
import React, { useRef, useMemo,useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import {
  softShadows,
  OrbitControls,
  Ring,
  Torus,
  Circle,
  MeshWobbleMaterial,
  PresentationControls,
  Html,
  Text,
} from "@react-three/drei";
import { Container } from "@mui/system";
import { Box } from "@mui/joy";
import {motion} from 'framer-motion';

// Inject soft shadow shader
softShadows();

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
function Sphere({ position = [0, 0, 0], ...props }) {
  const ref = useRef();
  const factor = useMemo(() => 0.5 + Math.random(), []);
  useFrame((state) => {
    const t = easeInOutCubic(
      (1 + Math.sin(state.clock.getElapsedTime() * factor)) / 2
    );
    ref.current.position.y = position[1] + t * 4;
    ref.current.scale.y = 1 + t * 0.01;
  });
  return (
    <mesh ref={ref} position={position} {...props} castShadow receiveShadow>
      <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color="lightblue"
        roughness={0}
        metalness={0.1}
      />
      {/* <MeshWobbleMaterial
          attach="material"
          color="lightblue"
          roughness={0}
          metalness={0.1}
          factor={1}
          speed={10}
        /> */}
    </mesh>
  );
}

function Spheres({ number = 15 }) {
  const ref = useRef();
  const positions = useMemo(
    () =>
      [...new Array(number)].map(() => [
        3 - Math.random() * 6,
        Math.random() * 4,
        3 - Math.random() * 6,
      ]),
    []
  );
  useFrame(
    (state) =>
      (ref.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() / 10) * Math.PI)
  );
  return (
    <group ref={ref}>
      {positions.map((pos, index) => (
        <Sphere key={index} position={pos} />
      ))}
    </group>
  );
}

function HtmlContent() {
  return (
    <mesh position={[0, 3, -3]}>
      <Html>
        <div className="name-holder noselect">Bhanu Singh</div>
      </Html>
    </mesh>
  );
}

const HomePage = ({inView,ref}) => {


  return (
    <Box 
      sx={{ width: "100vw", height: "100vh", overflowX:'hidden' }}
      component={motion.div}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 1.5,
        delay: 0.4,
        type: "spring",
        stiffness: "200",
      }}
      viewport={{ once: false }}
      
      >
      <Canvas
      
        className="canvas-flexbox"
        shadows
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <fog attach="fog" args={["white", 0, 40]} />
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -10]} color="blue" intensity={12.5} />
        <pointLight position={[-10, 0, 10]} color="blue" intensity={12.5} />
        <pointLight position={[0, -10, 0]} color="black" intensity={1.5} />

        <PresentationControls
          //
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 14, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <group position={[0, -3.5, 0]}>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -0.5, 0]}
              receiveShadow
            >
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial attach="material" transparent opacity={0.4} />
            </mesh>
            <Spheres />
            {/* <HtmlContent/> */}
          </group>
        </PresentationControls>
      </Canvas>
    </Box>
  );
};

export default HomePage;
