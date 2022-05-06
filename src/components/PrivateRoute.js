import React from 'react'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const [user, setUser] = useState()

    onAuthStateChanged(auth, user => {
      setUser(user)
    })

    return user ? children : <Navigate to="/" />
}

export default PrivateRoute