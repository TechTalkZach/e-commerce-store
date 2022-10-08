import React, { useState, useEffect } from 'react';

import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';
 
// import Products from './components/Product/Products';
// import Navbar from './components/Navbar/Navbar';


const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    // Using destructured response from async products.list  to set data inside products and populate them
    setProducts(data);
  }

  // Dependency Array set to empty so it only runs @ the start (Component did mount)
  useEffect(() => {
    fetchProducts();

  }, []);

  console.log(products);
  
  return (
    <div>
       <Navbar />
       <Products products={products} />
    </div>
  )
}

export default App
