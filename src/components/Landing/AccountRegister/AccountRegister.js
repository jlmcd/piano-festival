import React from 'react'

const AccountRegister = () => {
  return (
    <div className="account-register">
      <h2>Please Register To Sign Up</h2>
      <form action="">
        <input required placeholder="Email" type="email" />
        <input required placeholder="Password" type="password" minLength="8" />
        <input required placeholder="Re-type Password" type="password" minLength="8" />
        <input required placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />
        <select required defaultValue="null" name="teacherValue">
          <option disabled value="null">
            Please Select One
          </option>
          <option value="true">Teacher</option>
          <option value="false">Parent</option>
          <option value="false">Student</option>
        </select>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default AccountRegister
