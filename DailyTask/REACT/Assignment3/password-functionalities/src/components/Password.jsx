import React, { useState } from 'react'
import './Password.css';

const Password = () => {
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Your password is => ', password);
        //alert('Password reset successfully');

        // console.log("password", password);
        // console.log("retypePassword", retypePassword);

        if (password === retypePassword && password !== '' && retypePassword !== '') {
            alert('Password reset successfully');
        }

    }

    const isSubmitDisabled = password === '' || password !== retypePassword;

    return (
        <form onClick={handleSubmit} className="reset-password-form">
            <div className='input-group'>
                <label className='input-label' htmlFor="password">Password</label>
                <input className='input-field' type={showPassword ? 'text' : 'password'} name="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <a className='show-hide-button' onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</a>
            </div>

            <div className='input-group'>
                <label className='input-label' htmlFor="retypePassword">Confirm Password</label>
                <input className='input-field' type={showRetypePassword ? 'text' : 'password'} name="retypePassword" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} placeholder='Enter Re-Type Password' />
                <a className='show-hide-button' onClick={() => setShowRetypePassword(!showRetypePassword)}>{showRetypePassword ? 'Hide' : 'Show'}</a>
            </div>

            <button type='submit' className='submit-button' disabled={isSubmitDisabled}>Submit</button>

        </form>
    )
}

export default Password