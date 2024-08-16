// src/components/RecommendationEngine.js

import React, { useState, useEffect } from 'react';

const RecommendationEngine = ({ userId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch recommendations based on user preferences
    // For example purposes, using hardcoded data
    const fetchRecommendations = async () => {
      const response = await fetch(`/api/recommendations?userId=${userId}`);
      const data = await response.json();
      setRecommendations(data);
    };

    fetchRecommendations();
  }, [userId]);

  return (
    <div>AA
      
      <ul>
        {recommendations.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationEngine;
