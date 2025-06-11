import React, { useState } from 'react'

const UserForm = () => {

    const [form, setForm] = useState({
        fullname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);  
    };

  return (
    <div className='userForm'>
        <p>Hello My name is: {form.fullname} and my email address is: {form.email} and password is: {form.password}</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input type='text' name='fullname' onChange={handleChange} placeholder='please enter a fullname.' required /> <br/><br/>

            <label htmlFor="email">Email</label>
            <input type='email' name='email' onChange={handleChange} placeholder='please enter a email.' required /> <br/><br/>

            <label htmlFor="password">Password</label>
            <input type='password' name='password' onChange={handleChange} placeholder='please enter a password.' required /> <br/><br/>

            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default UserForm