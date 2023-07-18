import React from 'react'
import Header from './Header'
import '../Login.css'
const Login = () => {
  return (
    <div className="outer-div">
        <div className='main-div'>
            <div className="logo-login">
                <img className="image-login" src="../../images/logo.png" alt="logo" />
                <h4>Infinity Mart</h4>
            </div>
            <div className='sign-in-form'>
                <h3 className='middle'>Sign in</h3>
                <p>E-mail</p>  
                <input placeholder='Enter your email' type="email" className='input'/>
                <p>Password</p>
                <input placeholder='Enter your passowrd' type="password" className="input" />
                <br />
                <button className="middle-button">Sign in </button>
                <button className="middle-button">Create Your infinity mart account</button>
            </div>
        </div>
    </div>
  )
}

export default Login
