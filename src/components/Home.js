import React from 'react'
import '../Home.css'
import Product from './Product'
import dataArr from '../Data/data'

const Home = () => {
  return (
    <div className='body_home'>
    <div className="body_bg">
        <h2>WELCOME TO INFINITY MART</h2>
        <h3>Quality products for quality life</h3>
    </div>
    {
        dataArr.map((ele)=>
        (
          <Product name={ele.name} price={ele.price} rating={ele.rating} path={ele.path}/>
        ))
    }
    </div>
  )
}

export default Home
