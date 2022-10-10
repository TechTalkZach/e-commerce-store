import React, { useState, useEffect } from 'react';

import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';
 
// import Products from './components/Product/Products';
// import Navbar from './components/Navbar/Navbar';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    // Using destructured response from async products.list  to set data inside products and populate them
    setProducts(data);
  }

  // commerce.cart.retrieve().then((cart) => console.log(cart));

  const fetchCart = async () => {
    // commerce.cart.retrieve().then((cart) => console.log(cart));
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    // commerce.cart.add(productId, quantity).then(json => console.log(json));

     console.log(item)
     console.log(item.total_items)

    setCart(item.cart);
    // console.log(cart.total_items)
  }
  // Dependency Array set to empty so it only runs @ the start (Component did mount)
  useEffect(() => {
    fetchProducts();
    fetchCart();

  }, []);

  
  return (
    <div>{console.log(cart)}
       <Navbar totalItems={cart.total_items} />
       <Products products={products} onAddToCart={handleAddToCart} />
       <Cart cart={cart} />
    </div>
  )
}

export default App
