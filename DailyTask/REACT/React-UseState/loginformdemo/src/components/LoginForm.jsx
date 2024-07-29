import React, { useState } from 'react'

const LoginForm = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
      });
    
      const printValues = (e) => {
        e.preventDefault();
        console.log(form.username, form.password);
      }
    
      const updateField = (e) => {
        e.preventDefault();
        setForm({
          ...form,
          [e.target.name] : e.target.value
        })
      }
  return (
    <>
        <div>
          <h1>This is a Login Form!</h1>
          <form onSubmit={printValues}>
            <label htmlFor="username">UserName: </label>
            <input type="text" value={form.username} name='username' onChange={updateField} title='username' />
            <br/>
            <br/>
            <label htmlFor="password">Password: </label>
            <input type='password' value={form.password} name='password' onChange={updateField} title='password' />
            <br/>
            <br/>
            <button>Submit</button>
          </form>  
          
          {/* <h1>The Password is {form.pass}</h1> */}
        </div>
      </>
  )
}

export default LoginForm