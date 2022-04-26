import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const checkUsername = (event, username) => {
    if (username === '') {
      event.preventDefault()
      setUsernameError('You must enter a username')
    } else {
      setUsernameError('')
    }    
  }

  const checkPassword = (event, password) => {
    if (password === '') {
      event.preventDefault()
      setPasswordError('You must enter a username')
    } else {
      setPasswordError('')
    }    
  }

  return (
    <div className='container'>
        <h1>Log in</h1>
        <form className='form'>
            <label htmlFor="username">Username</label>
            <input type="text" 
                   id="username" 
                   className='input'
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
            />
            <p className={usernameError === '' ? 'hide' : 'show'}>{usernameError}</p>
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
                  checkUsername(e, username)
                  checkPassword(e, password)
                }
              }
            >Log in</button>
        </form>  
        <p>Don't have an account ? <Link to='/signup'>Create one</Link></p>
    </div>
    
  )
}

export default Login