import React, {useContext, useState } from 'react'
import '../Product.css'
import {CartContext} from "../App"

const CheckoutProduct = ({id,name,price,rating,path}) => 
{
  const data=useContext(CartContext)
  return (
    <div className='Product Checkout'>
        <div className="description">
        {name} 
        </div>

        <div className="price-container">
        <i class="fa-solid fa-indian-rupee-sign fa-lg"></i>
          <div className='price'>{price}</div>
        </div>
        <div className='middle-product'>
          <img className="product_image" src={path} alt="not working" />
        
        <button onClick={()=>
        {
          console.log(id);
          const temp=data.cart.filter((ele)=>
          (
            ele.id!=id
          ))
          data.setCart(temp)
          data.setPrice(data.price-price);
        }} className='cart-button'>Remove from the Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct;
