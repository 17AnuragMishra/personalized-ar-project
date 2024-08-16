// src/components/GlassesModel.js

import React from 'react';
import { useGLTF } from '@react-three/drei';

const GlassesModel = () => {
    const { scene } = useGLTF('/assets/models/DamagedHelmet.glb'); // Example path to 3D model

  return <primitive object={scene} scale={1} position={[0, 1, 0]} />;
};

export default GlassesModel;
