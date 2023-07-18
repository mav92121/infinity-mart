import React, { useContext } from 'react'
import '../Checkout.css'
import {CartContext} from "../App"
import CheckoutProduct from './CheckoutProduct'
const Checkout = () => {
  const data=useContext(CartContext);
  var name;
  if(!data.user)
  {
    name="Guest"
  }
  else name=data.user.email;
  return (
    <div className='checkout'>
      <div className="checkout_left">
      <h2 className='heading'> Hello {name} Your Shopping basket will appear below</h2>
      {
        data.cart.map((ele)=>(
          <CheckoutProduct id={ele.id} name={ele.name} price={ele.price} path={ele.path} />
        ))
      }
      </div>

      <div className="checkout_right">
        <p>Subtotal <strong>{data.cart.length} </strong>(items) :
        <div className='price-value'>
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <strong>{data.price}</strong>
        </div>
        </p>
        <button className='cart-button'>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Checkout
