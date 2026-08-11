'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); return }
    router.push('/dashboard')
  }

  return (
    <div style={{ maxWidth: 400, margin: '80px auto', padding: 24, background: 'white', borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>Construction Site App</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
        style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 6, border: '1px solid #ccc' }} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
        style={{ width: '100%', padding: 10, margin: '10px 0', borderRadius: 6, border: '1px solid #ccc' }} />
      {error && <p style={{ color: 'red', fontSize: 14 }}>{error}</p>}
      <button onClick={handleLogin}
        style={{ width: '100%', padding: 12, background: '#0b5fff', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
        Log In
      </button>
    </div>
  )
}
