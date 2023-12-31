import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    Mesh_corn: THREE.Mesh
    Mesh_corn_1: THREE.Mesh
  }
  materials: {
    green: THREE.MeshStandardMaterial
    yellow: THREE.MeshStandardMaterial
  }
}

export function Corn(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/foods/corn.glb") as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_corn.geometry} material={materials.green} />
      <mesh geometry={nodes.Mesh_corn_1.geometry} material={materials.yellow} />
    </group>
  )
}

useGLTF.preload("/models/foods/corn.glb")
