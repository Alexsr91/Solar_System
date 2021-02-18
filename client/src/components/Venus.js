/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Venus.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.Venus}
        geometry={nodes.Venus.geometry}
        position={[-6.64, 0.46, -4.65]}
        rotation={[0, 0.96, -Math.PI / 2]}
        scale={[0.43, 0.43, 0.43]}
      ><meshStandardMaterial color="hotpink" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Venus.glb')