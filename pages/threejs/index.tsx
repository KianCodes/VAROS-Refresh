import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import ModelOBJ from '@/components/models/ModelOBJ'
import { OrbitControls, Stage, Environment } from '@react-three/drei'
import styles from '../../styles/ThreeJS.module.scss'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Three = () => {
  let liverPath = '/models/VAROS-3D-Models/LiverHealthy.obj'
  let intestinePath = '/models/VAROS-3D-Models/VAROS_Intestine.obj'
  const [modelPath, setModelPath] = useState(liverPath)
  const handleClick = (event) => {
    setModelPath(event.target.value)
  }

  return (
    <div className = {styles.container}>
      <div className = {styles.buttons}>
        <button onClick={handleClick} value={intestinePath}>
          Intestine
        </button>
        <button onClick={handleClick} value={liverPath}>
          Liver
        </button>
      </div>
      <div className = {styles.main}>
        <Canvas>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          <Stage>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ModelOBJ file={modelPath} />
            <Environment files = 'nebula n0.hdr' path={'/backgrounds/'} background />
          </Stage>
        </Canvas>
      </div>
    </div>
  )
}

export default Three