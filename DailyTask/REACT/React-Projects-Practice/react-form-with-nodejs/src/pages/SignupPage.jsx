import React from 'react'
import UserForm from '../components/UserForm'

const SignupPage = () => {
  return (
    <>
    <div className='signup'>
      <h1>User Sign up!</h1>
      <em>Welcome to the user signup page!</em>
      <br/><br/>
      <UserForm />
    </div>
    </>
  )
}

export default SignupPage