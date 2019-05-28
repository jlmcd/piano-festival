import React, { useState } from 'react'
import { login } from '../../../utils/authUtils'
import { withRouter } from 'react-router-dom'

const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="login">
      <h2>Please Log In To Sign Up</h2>
      <form>
        <input
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <div>
          <button onClick={props.toggleRegister}>Register</button>
          <input onClick={e => login(e, email, password, props)} value="Login" type="submit"/>
        </div>
      </form>
    </div>
  )
}

export default withRouter(Login)
