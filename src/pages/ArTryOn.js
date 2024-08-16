// src/pages/ARTryOn.js

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import styles from './ArTryOn.css';

const Model = ({ modelPath, position }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} position={position} scale={[1, 1, 1]} />;
};

const ARTryOn = () => {
  // Define an array of models with their paths and positions
  const models = [
    // {
    //   modelPath: '/assets/models/DamagedHelmet.glb',
    //   position: [0, 1.5, 0],
    // },
    {
      modelPath: '/assets/models/sunglass.glb',
      position: [0, 0, 0],
    },
    // Add more models here
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AR Try-On</h1>
      <div className={styles.viewer}>
        <Canvas camera={{ position: [0, 2, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 10, 10]} intensity={1.2} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
          <Environment preset="sunset" />
          <Suspense fallback={null}>
            {models.map((model, index) => (
              <Model key={index} modelPath={model.modelPath} position={model.position} />
            ))}
          </Suspense>
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default ARTryOn;
