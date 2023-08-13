'use client'

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import{ signIn, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'




 export default function Login()  {
   const session = useSession()
   const router = useRouter()
    const[data ,setData] = useState({
      email:'',
      password:''
    })
    
    useEffect(()=>{
      if (session?.status ==='authenicated'){
        router.push('/dashboard')
      }
    
    })
  
    const handleSubmit = async (e:any) => {
    e.preventDefault();
    signIn('credentials',{...data ,redirect:false})
    .then((Callback:any)=>{
      if(Callback?.error){
        toast.error(Callback.error)
      }

      if (Callback?.ok && !Callback.error){
        toast.success('logged in successfully')
      }
    })
    }

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text"
            placeholder='email'
            className={styles.input}
            value={data.email}
            onChange={e =>setData({...data,email:e.target.value})}
            required
            />
            <input type="text"
            placeholder='password'
            className={styles.input}
            value={data.password}
            onChange={e => setData({...data,password:e.target.value})}
            required
            />
            <button className={styles.button}>Login</button>
            <button onClick={()=>signIn('github')} className={styles.button}>SignIn with github</button>
            <button onClick={()=>signIn('google')} className={styles.button}>SignIn with github</button>
        </form>
        <Link href='/verification/Login'>Login with an existing account</Link>
    </div>
  )
}
