// src/pages/PersonalizedTryOn.js

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import styles from './PersonalizedTryOn.module.css';

const Model = ({ modelPath, position, scale }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} position={position} scale={scale} />;
};

const PersonalizedTryOn = () => {
  const models = [
    {
      name: 'Helmet',
      modelPath: '/assets/models/DemagedHelmet.glb',
      position: [0, 1.5, 0],
      scale: [0.5, 0.5, 0.5],
    },
    {
      name: 'Female Top',
      modelPath: '/assets/models/femaletop.glb',
      position: [0, 0.5, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'Glasses',
      modelPath: '/assets/models/glasses.glb',
      position: [0, 1, 0],
      scale: [0.5, 0.5, 0.5],
    },
  ];

  const [selectedModel, setSelectedModel] = useState(models[0].modelPath);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Personalized Try-On Experience</h1>
      <div className={styles.selector}>
        <select onChange={(e) => setSelectedModel(e.target.value)}>
          {models.map((model, index) => (
            <option key={index} value={model.modelPath}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.viewer}>
        <Canvas camera={{ position: [0, 2, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 10, 10]} intensity={1.2} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <Model modelPath={selectedModel} position={[0, 1, 0]} scale={[1, 1, 1]} />
          </Suspense>
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default PersonalizedTryOn;
