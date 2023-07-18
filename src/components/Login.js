import React,{useContext, useState} from 'react'
import Header from './Header'
import '../Login.css'
import { auth } from '../firebase'
import { useNavigate} from 'react-router-dom'
import { CartContext } from '../App'

const Login = () => 
{
    const data=useContext(CartContext);
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=(event)=>
    {       
        // firebase login code
        auth.signInWithEmailAndPassword(email,password).then(()=>
        {
            navigate("/")
        }).catch((error)=>{alert(error.message)})

    }
    const createAccount=(event)=>
    {   
        // event.preventDefalut();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>
        {
            //successfully created a user
            console.log(auth);
            if(auth)
            {
                navigate("/");
            }
        }).catch((error)=>{
            alert(`an error occured ${error.message}`)
        })
        //firebase register
    }
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
                <input placeholder='Enter your email' type="email" className='input' value={email} onChange={(e)=>
                {
                    setEmail(e.target.value)
                }}/>
                <p>Password</p>
                <input placeholder='Enter your passowrd' type="password" className="input" value={password} onChange={(e)=>
                {
                    setPassword(e.target.value)
                }} />
                <br />
                <button className="middle-button" onClick={signIn}>Sign in </button>
                <button className="middle-button" onClick={createAccount}>Create Your infinity mart account</button>
            </div>
        </div>
    </div>
  )
}

export default Login
