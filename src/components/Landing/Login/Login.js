import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="login">
      <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button>Login</button>
      <h5>Forgot Password?</h5>
      <h5>Create an Account</h5>
    </div>
  )
}

export default Login