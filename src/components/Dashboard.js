import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import person from '../icons/person.svg'
import styles from '../styles/Dashboard.module.css'

const Dashboard = () => {
  const [displayed, setDisplayed] = useState(false)

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className={styles.container}>
      <p className={styles.username}>Username 
        <img src={person} 
             alt='profile-pic'
             onMouseEnter={() => setDisplayed(true)}
             onMouseLeave={() => setTimeout(() => {setDisplayed(false)}, 200)}
        />
      </p>
      <p 
        className={displayed ? styles.show : styles.hide}
        onMouseEnter={() => setTimeout(() => {setDisplayed(true)}, 200)}
        onMouseLeave={() => setDisplayed(false)}
      >
        <Link to='/'>Log out</Link>
      </p>
      <h1 className={styles.h1}>Dashboard</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor finibus egestas. Quisque eu mollis felis, eget congue nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eu nunc sed nisi rhoncus lacinia. Morbi porttitor dolor ac porta consequat. Sed tincidunt eros ut efficitur bibendum. Cras nec neque feugiat magna fringilla pulvinar quis id lacus. Vestibulum non velit odio. Aliquam lobortis in lorem in bibendum. Sed convallis pulvinar leo, nec commodo lectus luctus tempus. Aliquam eget odio vitae dolor lacinia blandit ut quis metus. Nam eget sem volutpat, vehicula urna nec, commodo diam. Praesent ac viverra erat. Phasellus convallis efficitur sollicitudin. Aliquam ut pulvinar enim. Vivamus fermentum massa in nulla euismod, ac auctor augue molestie.</p>
    </div>
  )
}

export default Dashboard