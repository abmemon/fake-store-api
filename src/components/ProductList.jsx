import React, { useState, useEffect } from 'react';
import styles from '../css/layout.module.css';

const ProductList = ({ setProductDetails }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
      const data = await response.json();
      setProductDetails(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul className={styles.list}>
          {products.map(product => (
            <li key={product.id} onClick={() => handleClick(product.id)} className={styles.listItem}>
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;