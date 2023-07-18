import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Product from './components/Product';
import Checkout from './components/Checkout';
import { createContext, useState } from 'react';
export const CartContext=createContext();

function App() 
{
  const [cartCount,setCartCount]=useState(0);
  const [price,setPrice]=useState(0);
  const [cart,setCart]=useState([]);
  return (
    <Router>
    <CartContext.Provider value={{cartCount,setCartCount,cart,setCart,price,setPrice}}>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />,<Checkout/>]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
          <Route path="/login" element={[<Header />, <Login />]}/>
        </Routes>
      </div>
    </CartContext.Provider>
    
    </Router>
  );
}

export default App;
