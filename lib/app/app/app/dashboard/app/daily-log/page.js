'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function DailyLog() {
  const [weather, setWeather] = useState('')
  const [labor, setLabor] = useState('')
  const [progress, setProgress] = useState('')
  const [issues, setIssues] = useState('')
  const [msg, setMsg] = useState('')

  const submitLog = async () => {
    const { data: userData } = await supabase.auth.getUser()
    const { error } = await supabase.from('daily_logs').insert({
      weather, labor_count: parseInt(labor) || 0,
      progress_notes: progress, issues,
      created_by: userData?.user?.id
    })
    if (error) { setMsg('Error: ' + error.message) } else { setMsg('Log saved successfully!') }
  }

  return (
    <div style={{ maxWidth: 500, margin: '60px auto', background: 'white', padding: 24, borderRadius: 10 }}>
      <h2>Daily Site Log</h2>
      <input placeholder="Weather (e.g. Sunny, Rainy)" value={weather} onChange={e => setWeather(e.target.value)}
        style={{ width: '100%', padding: 10, margin: '8px 0' }} />
      <input placeholder="Labor Count" value={labor} onChange={e => setLabor(e.target.value)}
        style={{ width: '100%', padding: 10, margin: '8px 0' }} />
      <textarea placeholder="Progress Notes" value={progress} onChange={e => setProgress(e.target.value)}
        style={{ width: '100%', padding: 10, margin: '8px 0' }} />
      <textarea placeholder="Issues (if any)" value={issues} onChange={e => setIssues(e.target.value)}
        style={{ width: '100%', padding: 10, margin: '8px 0' }} />
      <button onClick={submitLog}
        style={{ width: '100%', padding: 12, background: '#0b5fff', color: 'white', border: 'none', borderRadius: 6 }}>
        Submit Log
      </button>
      {msg && <p>{msg}</p>}
    </div>
  )
}
