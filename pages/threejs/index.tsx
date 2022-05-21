import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import ModelOBJ from '@/components/models/ModelOBJ'
import { OrbitControls, Stage } from '@react-three/drei'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const index = () => {
  let liverPath = '/models/VAROS-3D-Models/LiverHealthy.obj'
  let intestinePath = '/models/VAROS-3D-Models/VAROS_Intestine.obj'
  const [modelPath, setModelPath] = useState(liverPath)
  const handleClick = (event) => {
    setModelPath(event.target.value)
  }
  return (
    <div>
      <button onClick={handleClick} value={intestinePath}>
        Intestine
      </button>
      <button onClick={handleClick} value={liverPath}>
        Liver
      </button>
      <div
        style={{
          width: 1000,
          height: 1000,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
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
            {/* <Box /> */}
          </Stage>
        </Canvas>
      </div>
    </div>
  )
}

export default index
