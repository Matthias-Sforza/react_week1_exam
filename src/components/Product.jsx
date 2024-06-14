import React from 'react';
import './Product.css';

const Product = ({ name, description, price }) => (
  <div className="produit">
    <h2>{name}</h2>
    <p>{description}</p>
    <p className="thunes">${price.toFixed(2)}</p>
  </div>
);

export default Product;
