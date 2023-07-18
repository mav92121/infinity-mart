import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './components/Checkout';
import { createContext, useEffect, useState } from 'react';
import { auth } from './firebase';


export const CartContext=createContext();

function App() 
{
  // const data=useContext(CartContext);
  useEffect(()=>
  {
    auth.onAuthStateChanged((currUser)=>
    {
      console.log(`The user is ${currUser}`);
      if(currUser)
      {
        // logged in
        setUser(currUser)
      }
      else 
      {
        //logged out
        setUser(null);
      }
    })
  },[])
  const [cartCount,setCartCount]=useState(0);
  const [price,setPrice]=useState(0);
  const [cart,setCart]=useState([]);
  const [user,setUser]=useState(null);
    return (
    <Router>
    <CartContext.Provider value={{cartCount,setCartCount,cart,setCart,price,setPrice,user,setUser}}>
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
