// src/components/ARExperience.js

import React from 'react';

const ARExperience = () => {
  return (
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-entity gltf-model="url(/assets/models/sunglasses.glb)" scale="0.5 0.5 0.5"></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARExperience;
