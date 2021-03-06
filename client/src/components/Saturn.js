/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Saturn.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.Saturn}
        geometry={nodes.Saturn.geometry}
        position={[0, 0.46, 0]}
        rotation={[-1.22, -1.19, -1.18]}
        scale={[0.06, 0.06, 0.06]}
      ><meshStandardMaterial color="#FF7B41" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Saturn.glb')
