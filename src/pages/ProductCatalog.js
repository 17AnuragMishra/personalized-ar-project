// src/pages/ProductCatalog.js

import React from 'react';
import './ProductCatalog.css';
import ProductCard from '../components/ProductCard';

const ProductCatalog = () => {
  // Sample products data (replace with actual data fetching later)
  const products = [
    { id: 1, name: 'Smart Glasses', price: '$299', imageUrl: '/assets/glasses.jpg' },
    { id: 2, name: 'AR Headset', price: '$499', imageUrl: '/assets/headset.jpg' },
    { id: 3, name: 'Smart Watch', price: '$199', imageUrl: '/assets/watch.jpg' },
  ];

  return (
    <div className="product-catalog">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
