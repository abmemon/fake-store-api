import React, { useState } from 'react';
import styles from '../css/layout.module.css';

const Product = ({ product }) => {

  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
    <h2>Product Details</h2>
    
    <div className={styles.details} onClick={toggleDescription} >
      <h3>{product.title}</h3>
      <p><b>Price:</b> ${product.price}</p>
      <p><img src={product.image} height="250px"></img></p>
      {showDescription ? <p>{product.description}</p> : <p><a href='#'>Show Description...</a></p>}
    </div>
    </>
  );
};

export default Product;