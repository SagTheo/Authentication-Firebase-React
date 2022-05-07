import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

function App() {
  const [user, setUser] = useState()

  onAuthStateChanged(auth, user => {
    setUser(user)
  })

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {
        user && <Route path="/dashboard" element={<Dashboard />} />
      }
      <Route path="*" element={user ? <NotFound /> : <Login />} />
    </Routes>
  );
}

export default App;
