// src/components/HatModel.js

import React from 'react';
import { useGLTF } from '@react-three/drei';

const HatModel = () => {
  const { scene } = useGLTF('/assets/models/hat.glb'); // Replace with the actual path to the 3D model

  return <primitive object={scene} scale={1} position={[0, 1, 0]} />;
};

export default HatModel;

