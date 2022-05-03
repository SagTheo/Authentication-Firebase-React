import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import '../styles/form.css'

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  const checkEmail = (event, email) => {
    if (email === '') {
      event.preventDefault()
      setEmailError('You must enter an email')
      return false
    } else {
      setEmailError('')
      return true
    }    
  }

  const checkPassword = (event, password) => {
    if (password === '') {
      event.preventDefault()
      setPasswordError('You must enter a username')
      return false
    } else {
      setPasswordError('')
      return true
    }    
  }

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        navigate('/dashboard')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='container'>
        <h1>Log in</h1> 
        { errorMessage !== '' && errorMessage }
        <form className='form'>
            <label htmlFor="email">Email</label>
            <input type="text" 
                   id="email" 
                   className='input'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
            <p className={emailError === '' ? 'hide' : 'show'}>{emailError}</p>
            <label htmlFor="password">Password</label>
            <input type="password" 
                   id="password" 
                   className='input'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} 
            />
            <p className={passwordError === '' ? 'hide' : 'show'}>{passwordError}</p>
            <button 
              className='button'
              onClick={
                (e) => {
                  if (checkEmail(e, email) && checkPassword(e, password)) {
                    e.preventDefault()
                    signIn(email, password)
                  } 
                }
              }
            >Log in</button>
        </form>  
        <p>Don't have an account ? <Link to='/signup'>Create one</Link></p>
    </div>
    
  )
}

export default Login