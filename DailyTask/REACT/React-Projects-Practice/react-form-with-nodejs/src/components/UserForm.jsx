import React from 'react'
import { useForm } from 'react-hook-form';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await API.post('/addUser', data);
      if(response) {
        alert('User created successfully');
        navigate('/');
      }
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='user-field'>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id='first_name' {...register('first_name', { required: 'First name is required' })} />
          {errors.first_name && <span>{errors.first_name.message}</span>}
        </div>

        <div className='user-field'>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id='last_name' {...register('last_name', {required: 'Last name is required' })} />
          {errors.last_name && <span>{errors.last_name.message}</span>}
        </div>

        <div className='user-field'>
          <label htmlFor="user_name">User Name</label>
          <input type="text" id='user_name' {...register('user_name', {required: 'User Name is required'})} />
          {errors.user_name && <span>{errors.user_name.message}</span>}
        </div>

        <div className='user-field'>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' {...register('email', {required: 'Email is required'})} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className='user-field'>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register('password', {required: 'Password is required'})} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div className='user-field'>
          <label htmlFor="address">Address</label>
          <textarea id="address" {...register('address', {required: 'Address is required'})}></textarea>
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <div className='user-field'>
          <label htmlFor="contact_no">Contact No</label>
          <input type="text" id='contact_no' {...register('contact_no', {required: 'Contact no is required'})} />
          {errors.contact_no && <span>{errors.contact_no.message}</span>}
        </div>

        <div className='btnSignup'>
          <button type='submit'>Signup</button>
        </div>
      </form>
    </>
  )
}

export default UserForm