'use client'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div style={{ maxWidth: 500, margin: '60px auto', textAlign: 'center' }}>
      <h2>Dashboard</h2>
      <p>Welcome! Choose an action:</p>
      <Link href="/daily-log">
        <button style={{ padding: 12, margin: 8, width: 250, background: '#0b5fff', color: 'white', border: 'none', borderRadius: 6 }}>
          + Add Daily Site Log
        </button>
      </Link>
    </div>
  )
}
