import React, {Component} from 'react'

export default class Login extends Component {
  render() {
    return(
      <div>
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
        <h5>Forgot Password?</h5>
        <h5>Create an Account</h5>
      </div>
    )
  }
}