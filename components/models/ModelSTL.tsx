import { useLoader } from '@react-three/fiber'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const ModelSTL = ({ file }: { file: string }) => {
  const obj = useLoader(STLLoader, file)
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => (ref.current.rotation.z -= 0.1
    ))

  return (
    <>
      <mesh ref={ref} >
        <primitive object={obj} attach="geometry"/>
        <meshStandardMaterial color="orange" />
      </mesh>
      <ambientLight />
      <pointLight position={[20, 10, 10]} />
    </>
  )
}

export default ModelSTL
