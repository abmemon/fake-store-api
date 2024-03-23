import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { useState } from 'react';
import styles from './css/layout.module.css';
import Product from './components/Product';

function App() {
  const [productDetails, setProductDetails] = useState(null);

  return (
    
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Product List</h2>
        <ProductList setProductDetails={setProductDetails} />
      </div>
      <div className={styles.content}>
        
        {productDetails && <Product product={productDetails} />}
      </div>
    </div>
   
  );
}

export default App;
