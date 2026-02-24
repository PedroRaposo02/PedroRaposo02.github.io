"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function ServerNodes() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate random positions for the "server" floating nodes
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 30 - 15;
      
      const scale = Math.random() * 0.5 + 0.2;
      const rotX = Math.random() * Math.PI;
      const rotY = Math.random() * Math.PI;
      
      temp.push({ position: [x, y, z] as [number, number, number], scale, rotX, rotY });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Intentionally slow, moody rotation
      groupRef.current.rotation.y -= delta * 0.02;
      groupRef.current.rotation.x -= delta * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh 
          key={i} 
          position={node.position} 
          scale={[node.scale, node.scale * 3, node.scale]} 
          rotation={[node.rotX, node.rotY, 0]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial 
            color="#c0392b" 
            wireframe 
            transparent 
            opacity={0.15} 
          />
        </mesh>
      ))}
    </group>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Soft dark red ambient light */}
        <ambientLight intensity={0.2} color="#c0392b" />
        
        {/* Deep space stars */}
        <Stars 
          radius={50} 
          depth={50} 
          count={3000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5} 
        />
        
        {/* Abstract server structures */}
        <ServerNodes />
      </Canvas>
    </div>
  );
}
