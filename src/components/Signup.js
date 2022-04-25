import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'

const Signup = () => {
  return (
    <div className='container'>
        <h1>Sign up</h1>
        <form className='form'>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className='input'></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className='input'></input>
            <label htmlFor="password">Confirm password</label>
            <input type="password" id="password" className='input'></input>
            <button className='button'>Sign up</button>
        </form>  
        <p>Already have an account ? <Link to='/'>Log in</Link></p>
    </div>
  )
}

export default Signup