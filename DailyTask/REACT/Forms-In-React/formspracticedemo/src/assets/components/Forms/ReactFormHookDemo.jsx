import React from 'react';

import { useForm } from 'react-hook-form';

const ReactFormHookDemo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegistration = (data) => console.log(data);

    const handleError = (errors) => {
        console.log(errors);
    }


    const registerOptions = {

        name: { required: "Name is required" },
        email: { 
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address"
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        }
    }
    return (
        <div>

            <h1>ReactFormHook</h1>

            <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                <label htmlFor="name"> Name: </label>
                <input type="text" name='name' {...register('name', registerOptions.name)} />
                <small className='validateMsg'>
                    {errors?.name && errors.name.message}
                </small><br /><br />
                <label htmlFor="email"> Email: </label>
                <input type="email" name='email' {...register('email', registerOptions.email)} />
                <small className='validateMsg'>
                    {errors?.email && errors.email.message}
                </small><br /><br />

                <label htmlFor="password"> Password: </label>
                <input type="password" name='password' {...register('password', registerOptions.password)} />
                <small className='validateMsg'>
                    {errors?.password && errors.password.message}
                </small><br /><br />

                <button>Submit</button>
            </form>


        </div>
    )
}

export default ReactFormHookDemo