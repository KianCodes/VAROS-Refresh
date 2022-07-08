import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { MultiplyOperation, Color, MeshPhongMaterial, Mesh } from 'three'

interface ModelProps {
  path: string
  position: number[]
  scale: number[]
  texture: string
  rotate: boolean
  transparency: boolean
}

const ModelOBJ = ({
  path,
  position,
  scale,
  texture,
  rotate,
  transparency,
}: ModelProps) => {
  let mat0 = new MeshPhongMaterial({
    color: new Color('#f83f3f'),
    emissive: new Color('#1b1818'),
    specular: new Color('#775050'),
    shininess: 30,
    combine: MultiplyOperation,
    wireframe: transparency ? true : false,
    flatShading: false,
  })

  let mat1 = new MeshPhongMaterial({
    color: new Color('#922307'),
    emissive: new Color('#000000'),
    specular: new Color('#ee1b1b'),
    shininess: 30,
    combine: MultiplyOperation,
    wireframe: transparency ? true : false,
    flatShading: false,
    fog: true,
  })

  let mat2 = new MeshPhongMaterial({
    color: new Color('#60514d'),
    emissive: new Color('#000000'),
    specular: new Color('#ee1b1b'),
    shininess: 55,
    combine: MultiplyOperation,
    wireframe: transparency ? true : false,
  })

  const obj = useLoader(OBJLoader, path)
  const ref = useRef<THREE.Mesh>(null!)

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      switch (texture) {
        case '0':
          child.material = mat0
          break
        case '1':
          child.material = mat1
          break
        case '2':
          child.material = mat2
          break
      }
    }
  })

  let speed
  if (rotate) {
    speed = 0.001
  } else {
    speed = 0.0
  }

  useFrame((state, delta) => (ref.current.rotation.y += speed))
  useFrame((state, delta) => (ref.current.position.x = position[0]))
  useFrame((state, delta) => (ref.current.position.y = position[1]))
  useFrame((state, delta) => (ref.current.position.z = position[2]))
  useFrame((state, delta) => (ref.current.scale.x = scale[0]))
  useFrame((state, delta) => (ref.current.scale.y = scale[1]))
  useFrame((state, delta) => (ref.current.scale.z = scale[2]))

  return (
    <mesh ref={ref} scale={1}>
      <primitive object={obj} />
    </mesh>
  )
}

export default ModelOBJ
