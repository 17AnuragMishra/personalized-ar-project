// src/components/WatchModel.js

import React from 'react';
import { useGLTF } from '@react-three/drei';

const WatchModel = () => {
  const { scene } = useGLTF('/assets/models/watch.glb'); // Replace with the actual path to the 3D model

  return <primitive object={scene} scale={1} position={[0, 1, 0]} />;
};

export default WatchModel;
