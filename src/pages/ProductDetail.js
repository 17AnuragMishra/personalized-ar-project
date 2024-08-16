// src/pages/ProductDetail.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css'; // Importing CSS for styling

const ProductDetail = () => {
  const { id } = useParams();

  // Sample product data (In a real app, fetch data from an API or Redux store)
  const product = {
    id: id,
    name: 'Stylish Glasses',
    description: 'These stylish glasses are perfect for any occasion. Lightweight, durable, and fashionable.',
    price: '$99',
    imageUrl: '/assets/images/glasses.jpg' // Example image path
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>
        <Link to="/tryon" className="try-on-button">
          Try It On
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
