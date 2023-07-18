import React, {useContext, useState } from 'react'
import '../Product.css'
import { useStateValue } from './StateProvider'
import {CartContext} from "../App"

const Product = ({id,name,price,rating,path}) => 
{
  const data=useContext(CartContext)
  const addToBasket=()=>
  {
    data.setCartCount(data.cartCount+1);
    data.setPrice(data.price+price);
    data.setCart([...data.cart,{
      name:name,
      price:price,
      path:path,
      id:data.cartCount,
    }])
    data.setCartCount(data.cartCount+1);
    // alert("Product added to Cart")
  }
  var arr=new Array();
  rating= +rating;
  if(rating>5)rating=5;
  if(rating<0)rating=0;
  for(var i=0;i<rating;i++)
  {
    arr.push(<i class="fa-solid fa-star"></i>);
  }
  var empty=new Array();
  var temp=5-rating;
  while(temp--)
  {
    empty.push(<i class="fa-regular fa-star"></i>)
  }
  return (
    <div className='Product'>
        <div className="description">
        {name} 
        </div>

        <div className="price-container">
        <i class="fa-solid fa-indian-rupee-sign fa-lg"></i>
          <div className='price'>{price}</div>
        </div>
        <div className="ratings">
          {
            arr.map((ele)=>
            (
              ele
            ))            
          }   
          {
            empty.map((ele)=>
            (
              ele
            ))            
          }   
        </div>
        <div className='middle-product'>
          <img className="product_image" src={path} alt="not working" />
        <button onClick={addToBasket} className='cart-button'>Add to basket</button>
        </div>
    </div>
  )
}

export default Product
