import React, { useState } from 'react'
import Login from './Login/Login'
import AccountRegister from './AccountRegister/AccountRegister'
import { forgotPass } from '../../utils'

const Landing = () => {
  const [showRegister, setShowRegister] = useState(true)
  return (
    <div className="landing">
      {showRegister ? (
        <AccountRegister toggleRegister={() => setShowRegister(!showRegister)} />
      ) : (
        <>
          <Login toggleRegister={() => setShowRegister(!showRegister)} />
        </>
      )}
      <h5 onClick={forgotPass}>Forgot Password</h5>
      {showRegister ? (
        <h5 onClick={() => setShowRegister(!showRegister)}>Login</h5>
      ) : (
        <h5 onClick={() => setShowRegister(!showRegister)}>
          Create an Account
        </h5>
      )}
    </div>
  )
}

export default Landing
