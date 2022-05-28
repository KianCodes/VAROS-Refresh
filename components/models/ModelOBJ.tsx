import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const ModelOBJ = ({ file }: { file: string }) => {
  const obj = useLoader(OBJLoader, file)
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => (ref.current.rotation.y += 0.001))

  return (
    <mesh ref={ref} scale={0.5}>
      <primitive object={obj} />
    </mesh>
  )
}

export default ModelOBJ
