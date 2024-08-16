// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
    </div>
  );
};

export default ProductCard;
