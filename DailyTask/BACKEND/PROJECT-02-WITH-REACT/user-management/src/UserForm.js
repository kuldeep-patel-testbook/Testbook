import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers, selectedUser, setSelectedUser }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [jobTitle, setJobTitle] = useState('');

    useEffect(() => {
        if(selectedUser){
            setFirstName(selectedUser.first_name);
            setLastName(selectedUser.last_name);
            setEmail(selectedUser.email);
            setGender(selectedUser.gender);
            setJobTitle(selectedUser.job_title);

        }
    },[selectedUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedUser) {
            await axios.patch(`http://localhost:3500/api/users/${selectedUser.id}`, { first_name: firstName, last_name: lastName, email });
            setSelectedUser(null);
        } else {
            await axios.post('http://localhost:3500/api/users', { first_name: firstName, last_name: lastName, email });
        }
        fetchUsers();
        setFirstName('');
        setLastName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Job Title"
                value={jobtitle}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;