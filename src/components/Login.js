import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'

const Login = () => {
  return (
    <div className='container'>
        <h1>Log in</h1>
        <form className='form'>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className='input'></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className='input'></input>
            <button className='button'>Log in</button>
        </form>  
        <p>Don't have an account ? <Link to='/signup'>Create one</Link></p>
    </div>
    
  )
}

export default Login