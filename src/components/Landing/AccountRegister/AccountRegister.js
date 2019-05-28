import React, { useReducer } from 'react'
import {registerReducer} from '../../../utils/authUtils'

const initialState = {
  email: '',
  password: '',
  reType: '',
  firstName: '',
  lastName: '',
  teacher: null
}

const AccountRegister = props => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(registerReducer, initialState)

  return (
    <div className="account-register">
      <h2>Please Register To Sign Up</h2>
      <form action="">
        <input
          onChange={e => dispatch({ type: 'email', payload: e.target.value })}
          required
          placeholder="Email"
          type="email"
        />
        <input
          onChange={e =>
            dispatch({ type: 'password', payload: e.target.value })
          }
          required
          placeholder="Password"
          type="password"
          minLength="8"
        />
        <input
          onChange={e => dispatch({ type: 'reType', payload: e.target.value })}
          required
          placeholder="Re-type Password"
          type="password"
          minLength="8"
        />
        <input
          onChange={e =>
            dispatch({ type: 'firstName', payload: e.target.value })
          }
          required
          placeholder="First Name"
          type="text"
        />
        <input
          onChange={e =>
            dispatch({ type: 'lastName', payload: e.target.value })
          }
          placeholder="Last Name"
          type="text"
        />
        <select
          onChange={e => dispatch({ type: 'teacherValue', payload: e.target.value })}
          required
          defaultValue="null"
          name="teacherValue"
        >
          <option disabled value="null">
            Please Select One
          </option>
          <option value="true">Teacher</option>
          <option value="false">Parent</option>
          <option value="false">Student</option>
        </select>
        <input value="Register" type="submit" />
      </form>
    </div>
  )
}

export default AccountRegister
