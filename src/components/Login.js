import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Log in</h1>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"></input>
            <button>Log in</button>
        </form>  
    </div>
    
  )
}

export default Login