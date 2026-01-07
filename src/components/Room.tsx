"use client";

import * as THREE from "three";
import React from "react";
import { useGLTF, Outlines } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function Room(props: React.JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/room-transformed.glb") as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      {Object.entries(nodes).map(([name, node]) => {
        if (!node.isMesh) return null;

        return (
          <mesh
            key={name}
            name={name}
            geometry={node.geometry}
            position={node.position}
            rotation={node.rotation}
            scale={node.scale}
            castShadow
            receiveShadow
          >
            <meshToonMaterial
              color={(node.material as THREE.MeshStandardMaterial).color}
              map={(node.material as THREE.MeshStandardMaterial).map}
            />

            {/* 輪郭線 */}
            {/* <Outlines thickness={0} color="black" /> */}
          </mesh>
        );
      })}
    </group>
  );
}

useGLTF.preload("/room-transformed.glb");
