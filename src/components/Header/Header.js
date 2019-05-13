import React from 'react'

export default function Header() {
  const date = new Date()
  return (
    <header>
      {/* The year will automatically increment in June! */}
      <h1>{(date.getMonth() < 5) ? date.getFullYear() : date.getFullYear() + 1} Piano Festival</h1>
      <h2>Weber State University</h2>
    </header>
  )
}
