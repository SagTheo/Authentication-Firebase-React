import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/form.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordConfError, setPasswordConfError] = useState('')
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
      setPasswordError('You must enter a password')
      return false
    } else {
      setPasswordError('')
      return true
    }
  }

  const checkPasswordConf = (event, password, passwordConf) => {
    if (passwordConf === '') {
      event.preventDefault()
      setPasswordConfError('You must re-enter your password')
      return false
    } else if (passwordConf !== password) {
      event.preventDefault()
      setPasswordConfError('Passwords must be the same')
      return false
    } else {
      setPasswordConfError('')
      return true
    }
  }

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='container'>
        <h1>Sign up</h1>
        <form className='form'>
            <label htmlFor="email">Email</label>
            <input type="text" 
                   id="email" 
                   className='input'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
            <p className={emailError ? 'show' : 'hide'}>{emailError}</p>

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
                        if (checkEmail(e, email) && checkPassword(e, password) && checkPasswordConf(e, password, passwordConf)) {
                          navigate('/dashboard')
                        }  
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