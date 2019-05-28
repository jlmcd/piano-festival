import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import routes from './routes'

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

const App = () => {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  )
}

export default App
