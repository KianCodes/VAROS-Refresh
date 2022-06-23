import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { MultiplyOperation, Color, MeshPhongMaterial, Mesh } from 'three'

const ModelOBJ = ({ file }: { file: string }) => {
  const mat = new MeshPhongMaterial(
    {
      color: new Color("#f83f3f"),
      emissive: new Color("#1b1818"),
      specular: new Color("#775050"),
      shininess: 30,
      combine: MultiplyOperation,
    }
  )
  const obj = useLoader(OBJLoader, file)
  const ref = useRef<THREE.Mesh>(null!)
  
  obj.traverse((child) => {
    if(child instanceof Mesh) {
      child.material = mat
    }
  })

  useFrame((state, delta) => (ref.current.rotation.y += 0.001))

  return (
    <mesh ref={ref} 
          scale={0.5}
    >
      <primitive object={obj} />
    </mesh>
  )
}

export default ModelOBJ
