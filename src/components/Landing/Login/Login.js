import React, { useState } from 'react'
import { login } from '../../../utils'
import { withRouter } from 'react-router-dom'

const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginFn = () => {
    login(email, password)
    props.history.push('/dash')
  }

  return (
    <div className="login">
      <h2>Please Log In To Sign Up</h2>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <div>
        <button onClick={props.toggleRegister}>Register</button>
        <button onClick={loginFn}>Login</button>
      </div>
    </div>
  )
}

export default withRouter(Login)
