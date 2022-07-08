import React, { useState, Suspense } from 'react'
import {} from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import ModelOBJ from '@/components/models/ModelOBJ'
import { OrbitControls, Stage, Environment } from '@react-three/drei'
import styles from '../../styles/ThreeJS.module.scss'
import Loading from '@/components/reusable/Loading'
import DesktopBrowser from '@/components/reusable/DesktopBrowser'

import { isMobile } from 'react-device-detect'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Three = () => {
  let liver = {
    path: '/models/VAROS-3D-Models/LiverHealthy.obj',
    position: [0, -8, 0],
    scale: [2, 2, 2],
  }
  let intestine = {
    path: '/models/VAROS-3D-Models/VAROS_Intestine.obj',
    position: [0, -2, 3.5],
    scale: [2.3, 2.3, 2.3],
  }

  const [model, setModel] = useState(intestine)
  const [rotate, setRotate] = useState(true)
  const [transparency, setTransparency] = useState(false)
  const [texture, setTexture] = useState('0')

  const handleRotate = () => {
    setRotate(!rotate)
  }
  const handleTransparency = () => {
    setTransparency(!transparency)
  }
  const handleTexture = (e) => {
    setTexture(e.target.value)
  }
  const handleClick = (event) => {
    if (event.target.value === 'intestine') {
      setModel(intestine)
    } else if (event.target.value === 'liver') {
      setModel(liver)
    } else {
      console.log('Error: Cannot find model path')
    }
  }

  const ButtonsDesktop = () => {
    return (
      <>
        <div className={styles.buttonsFrame} />
        <div className={styles.buttonsDesktopContainer}>
          <div className={styles.modelButtonsDesktop}>
            <h2>Models</h2>
            <button onClick={handleClick} value={'intestine'}>
              Intestine
            </button>
            <button onClick={handleClick} value={'liver'}>
              Liver
            </button>
          </div>
          <div className={styles.controlButtonsDesktop}>
            <h2>Controls</h2>
            <label className={styles.labelContainer}>
              Rotate
              <input
                onChange={handleRotate}
                type="checkbox"
                checked={rotate}
              ></input>
            </label>
            <label className={styles.labelContainer}>
              Transparency
              <input
                onChange={handleTransparency}
                type="checkbox"
                checked={transparency}
              ></input>
            </label>
            <div className={styles.selectContainer}>
              <select onChange={handleTexture} value={texture}>
                <optgroup label="Styles">
                  <option value={'0'}>Style 1</option>
                  <option value={'1'}>Style 2</option>
                  <option value={'2'}>Style 3</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </>
    )
  }

  const ButtonsMobile = () => {
    return (
      <div className={styles.buttonsMobileContainer}>
        <h2>Models</h2>
        <div className={styles.buttonsMobile}>
          <button onClick={handleClick} value={'intestine'}>
            Intestine
          </button>
          <button onClick={handleClick} value={'liver'}>
            Liver
          </button>
        </div>
      </div>
    )
  }

  const InteractiveModel = () => {
    if (isMobile) {
      return (
        <div className={styles.main}>
          <DesktopBrowser />
        </div>
      )
    } else {
      return (
        <>
          <ButtonsDesktop />
          <div className={styles.main}>
            <Suspense fallback={<Loading />}>
              <Canvas camera={{ position: [0, 0, 0] }}>
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
                <Stage>
                  <pointLight position={[10, 10, 10]} />
                  <ModelOBJ
                    path={model.path}
                    position={model.position}
                    scale={model.scale}
                    texture={texture}
                    rotate={false}
                    transparency={transparency}
                  />
                  <Environment
                    files="nebula n0.hdr"
                    path={'/backgrounds/'}
                    background
                  />
                </Stage>
              </Canvas>
            </Suspense>
            <ButtonsMobile />
          </div>
        </>
      )
    }
  }

  return (
    <div className={styles.container}>
      <InteractiveModel />
    </div>
  )
}

export default Three
