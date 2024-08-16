// src/pages/VirtualStorefront.js

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import styles from './VirtualStorefront.module.css';
import { Link } from 'react-router-dom';
const Model = ({ modelPath, position, scale, onClick }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} position={position} scale={[1, 1, 1]} onClick={onClick} />;
};

const VirtualStorefront = () => {
  // Define models with their paths, positions, and scales
  const models = [
    {
      name: 'Helmet',
      modelPath: '/assets/models/DamagedHelmet.glb',
      position: [0, 1.5, 3],
      scale: [0.2, 0.2, 0.2],
    },
    // {
    //   name: 'Female Top',
    //   modelPath: '/assets/models/felmaletop.glb',
    //   position: [1, 1.5, 3],
    //   scale: [0.5, 0.5, 0.5],
    // },
    // {
    //   name: 'Glasses',
    //   modelPath: '/assets/models/glasses.glb',
    //   position: [-2, 1, 0],
    //   scale: [0.5, 0.5, 0.5],
    // },
    // {
    //   name: 'Shoes',
    //   modelPath: '/assets/models/shoes.glb',
    //   position: [0, 0, -2],
    //   scale: [1, 1, 1],
    // },
  ];

  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Virtual Storefront</h1>
      <div className={styles.viewer}>
        <Canvas camera={{ position: [0, 2, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 10, 10]} intensity={1.2} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
          <Environment preset="city" />
          <Suspense fallback={null}>
            {models.map((model, index) => (
              <Model
                key={index}
                modelPath={model.modelPath}
                position={model.position}
                scale={model.scale}
                onClick={() => setSelectedModel(model.name)}
              />
            ))}
          </Suspense>
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
        {selectedModel && <div className={styles.modelInfo}>Selected Model: {selectedModel}</div>}
      </div>
      {/* <div className={styles.buttons}>
        <Link to="/personalized-tryon" className={styles.tryOnButton}>
          Go to Personalized Try-On
        </Link>
      </div> */}
    </div>
  );
};

export default VirtualStorefront;
