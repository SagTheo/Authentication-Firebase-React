import { Routes, Route, Navigate } from 'react-router-dom'
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

  if (user) {
    window.localStorage.setItem('currentUser', 'signedIn')
  } else {
    window.localStorage.setItem('currentUser', '')
  }

  if (window.localStorage.getItem('currentUser')) {
    console.log('currentUser')
  } else {
    console.log('no currentUser')
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* 
        Doesn't work -> onAuthStateChanged is asynchronous -> while setUser() is setting 
        the currently signed user, the user state key is set to nothing -> even if there is 
        a currently signed in user, they will be redirected to the '/' page 
      */}
      {
        window.localStorage.getItem('currentUser') && <Route path="/dashboard" element={<Dashboard />} />
      }
      {
        !window.localStorage.getItem('currentUser') && <Route path="/dashboard" element={<Navigate to ="/" />} />
      }
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
