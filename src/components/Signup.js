import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordConfError, setPasswordConfError] = useState('')

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
      setPasswordError('You must enter a password')
    } else {
      setPasswordError('')
    }
  }

  const checkPasswordConf = (event, password, passwordConf) => {
    if (passwordConf === '') {
      event.preventDefault()
      setPasswordConfError('You must re-enter your password')
    } else if (passwordConf !== password) {
      event.preventDefault()
      setPasswordConfError('Passwords must be the same')
    } else {
      setPasswordConfError('')
    }
  }

  return (
    <div className='container'>
        <h1>Sign up</h1>
        <form className='form'>
            <label htmlFor="username">Username</label>
            <input type="text" 
                   id="username" 
                   className='input'
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
            />
            <p className={usernameError ? 'show' : 'hide'}>{usernameError}</p>

            <label htmlFor="password">Password</label>
            <input type="password" 
                   id="password" 
                   className='input'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
            />
            <p className={passwordError ? 'show' : 'hide'}>{passwordError}</p>

            <label htmlFor="passwordConf">Confirm password</label>
            <input type="password" 
                   id="passwordConf" 
                   className='input'
                   value={passwordConf}
                   onChange={(e) => setPasswordConf(e.target.value)}
            />
            <p className={passwordConfError ? 'show' : 'hide'}>{passwordConfError}</p>

            <button className='button'
                    onClick={
                      (e) => {
                        checkUsername(e, username)
                        checkPassword(e, password)
                        checkPasswordConf(e, password, passwordConf)
                      }
                    }
            >
              Sign up
            </button>
        </form>  
        <p>Already have an account ? <Link to='/'>Log in</Link></p>
    </div>
  )
}

export default Signup