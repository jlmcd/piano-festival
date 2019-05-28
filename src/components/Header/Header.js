import React, {useEffect} from 'react'

const Header = () => {
  const date = new Date()
  useEffect(() => (
    document.title = `${date.getMonth() < 5 ? date.getFullYear() : date.getFullYear() + 1} Piano Festival`
  ))
  return (
    <header>
      <h1>
        {/* This code generates the year and will automatically increment in June! */}
        {date.getMonth() < 5 ? date.getFullYear() : date.getFullYear() + 1}{' '}
        Piano Festival
      </h1>
      <h2>Weber State University</h2>
    </header>
  )
}

export default Header
