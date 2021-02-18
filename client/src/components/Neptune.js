/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Neptune.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.Neptune}
        geometry={nodes.Neptune.geometry}
        position={[0, 0, -0.01]}
        rotation={[0, 0.17, -Math.PI / 2]}
        scale={[0.94, 0.94, 0.94]}
      ><meshStandardMaterial color="#54B5FC" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Neptune.glb')
