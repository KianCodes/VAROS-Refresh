import React from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('./Box'),{
  ssr: false,
})

const index = () => {
  return (
    <div  style={{ position: "relative", width: 500, height: 500 }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default index;
