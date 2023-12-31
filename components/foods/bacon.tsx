import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    Mesh_bacon: THREE.Mesh
    Mesh_bacon_1: THREE.Mesh
  }
  materials: {
    brown: THREE.MeshStandardMaterial
    brownDark: THREE.MeshStandardMaterial
  }
}

export function Bacon(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/foods/bacon.glb") as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_bacon.geometry} material={materials.brown} />
      <mesh geometry={nodes.Mesh_bacon_1.geometry} material={materials.brownDark} />
    </group>
  )
}

useGLTF.preload("/models/foods/bacon.glb")
