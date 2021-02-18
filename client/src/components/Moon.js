/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Moon.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.Moon}
        geometry={nodes.Moon.geometry}
        position={[0, 0, -0.01]}
        rotation={[2.26, 0.13, 2.71]}
        scale={[0.82, 0.82, 0.82]}
      ><meshStandardMaterial color="#D7DDF5" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Moon.glb')
