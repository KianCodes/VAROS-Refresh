import React from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'),{
  ssr: false,
})

const index = () => {
  return (
    <div  style={{ position: "relative", width: 500, height: 500 }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box  />
      </Canvas>
    </div>
  );
};

export default index;
