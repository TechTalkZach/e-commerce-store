import React, { useState, useEffect, useRef } from 'react';

import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
// import Products from './components/Product/Products';
// import Navbar from './components/Navbar/Navbar';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  let [updated, setUpdated] = useState(1);
  
  const effectRan = useRef(false);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    // Using destructured response from async products.list  to set data inside products and populate them
    setProducts(data);
    setLoading(false);
    console.log(data)
  }

  const fetchCart = async () => {
    
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    // const item = await commerce.cart.add(productId, quantity);
    // setCart(item.cart);
    setCart(await commerce.cart.add(productId, quantity));
    console.log(cart.total_items)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, {quantity} );

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  } 
  // Dependency Array set to empty so it only runs @ the start (Component did mount)
  useEffect(() => {
      fetchProducts();
      fetchCart();

  }, []);

  if(!cart) return null;

  if(cart === undefined) return <h1>LOADING...</h1>;
  
  return (
    <Router>
       <div>
       <Navbar totalItems={cart.total_items} />
       <Routes>
          <Route path='/' element={ <Products products={products} onAddToCart={handleAddToCart} />}></Route>
          <Route path='/cart' element={<Cart 
                                            cart={cart}
                                            handleUpdateCartQty={handleUpdateCartQty}
                                            handleRemoveFromCart={handleRemoveFromCart}
                                            handleEmptyCart={handleEmptyCart} 
                                        />}>

        </Route>
        <Route path='/checkout' element={<Checkout />}></Route>
       </Routes>
    </div>
    </Router>
  )
}

export default App
