'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import axios from 'axios'


const Register = () => {
  const[data, setData] = useState({
    name:'',
    email:'',
    password:''
  })


  
  const handleSubmit = async (e:any) => {
        e.preventDefault();
        axios.push('/api/register', data)
        .then(()=>toast.success('user has been registered'))
        .catch(()=>toast.error('something went wrong'))


    }
  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text"
            placeholder='username'
            className={styles.input}
            value={data.name}
            onChange={e=> setData({...data, name: e.target.value})}
            required
            />
            <input type="text"
            placeholder='email'
            className={styles.input}
            value={data.email}
            onChange ={e => setData({...data, email:e.target.value})}
            required
            />
            <input type="text"
            placeholder='password'
            className={styles.input}
            value={data.password}
            onChange={e => setData({...data, password:e.target.value})}
            required
            />
            <button className={styles.button}>Register</button>
        </form>
        <Link href='/Login'>Login with an existing account</Link>
    </div>
  )
}

export default Register;