import React, { useContext } from 'react'
import '../Header.css'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import {CartContext} from "../App"

const Header = () => 
{
  const data=useContext(CartContext);
  return (
    <div className='main-header'>
      <div className="logo">
        <Link to='/'>
          <div className="header_log">
            <img className="logo_image" src="../../images/logo.png" alt="logo" />
            <h6 className='heading_link'>Infinity Mart</h6>
          </div>
        </Link>
        
        <div className="header_parent">

        
        <div className="content">
          <div className="input_header_align">
            
          <input type="text" placeholder='search' className='header_search'/>
          <div className='mg-glass'>
          <i class="fa-solid fa-magnifying-glass fa-xl"></i>
          </div>
          </div>
          <Link to="/login">
          <div className='header_content_up_down'>
            <div>
              Hello
            </div>
            <span className='bold'>
              Sign In
            </span>
          </div>
          </Link>
          <div className='header_content_up_down'>
            <div>
              Return
            </div>
            <span className='bold'>
              & Orders
            </span>
          </div>
          <Link to="/checkout">
            <div className='last_header'>
            <i className="fa-solid fa-cart-shopping fa-2xl icon_header"></i>
            <div className='header_val'>{data.cart.length}</div>
          </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
