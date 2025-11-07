import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin(){
  const [email,setEmail]=useState('')
  const [pw,setPw]=useState('')
  const [err,setErr]=useState('')
  const nav = useNavigate()

  const login = async (e)=>{
    e.preventDefault()
    try{
      await signInWithEmailAndPassword(auth,email,pw)
      nav('/admin/upload')
    }catch(err){setErr(err.message)}
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-maroon">Admin Login</h2>
      {err && <div className="text-red-500">{err}</div>}
      <form onSubmit={login} className="mt-4 space-y-3">
        <input className="w-full border p-2 rounded" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" />
        <input type="password" className="w-full border p-2 rounded" value={pw} onChange={e=>setPw(e.target.value)} placeholder="password" />
        <button className="bg-maroon text-cream px-4 py-2 rounded">Sign In</button>
      </form>
      <p className="mt-3 text-sm">Admin users: create via Firebase console (Auth &rarr; Users)</p>
    </div>
  )
}