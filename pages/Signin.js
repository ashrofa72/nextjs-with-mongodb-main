import React from 'react'
import {useState} from 'react'
import styles from '../styles/signin.module.css'

const Signin = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${email}`)

  }
  const [email, setEmail]=useState('')
  const [password, setPassword ]= useState('')
  return (
    <div className={styles.pagecontainer}>

      <div className={styles.formcontainer}>

        <form onSubmit={HandleSubmit} className={styles.form}>
          <div className={styles.formtitle}>
            <h2>Sign in Form</h2>
          </div>
          <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
          <input type='submit' />
        </form>
      </div>
    </div>
  )
}

export default Signin