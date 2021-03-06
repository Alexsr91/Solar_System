/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Pluto.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.Pluto}
        geometry={nodes.Pluto.geometry}
        position={[-0.01, 0, 0.01]}
        rotation={[-1.07, -0.06, -2.37]}
        scale={[0.84, 0.84, 0.84]}
      ><meshStandardMaterial color="#EAE3C0" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Pluto.glb')
