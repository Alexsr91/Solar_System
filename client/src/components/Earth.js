/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Earth.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Earth_Ground} geometry={nodes.Earth_Ground.geometry} scale={[0.01, 0.01, 0.01]} >
      <meshStandardMaterial color="#57FF41" />
      </mesh>
      <mesh material={materials.Earth_Water} geometry={nodes.Earth_Water.geometry} scale={[0.01, 0.01, 0.01]} >
      <meshStandardMaterial color="#41C5FF" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Earth.glb')
