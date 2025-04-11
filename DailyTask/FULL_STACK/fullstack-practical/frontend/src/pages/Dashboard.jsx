import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                navigate('/');
                return;
            }

            try {
                const res = await axios.get('http://localhost:5100/api/users/dashboard', {
                    headers: {Authorization: `Bearer ${token}`},
                });
                setMessage(res.data.msg);
            } catch (error) {
                alert(error?.data.msg || 'Something error else');
            }
        };
        fetchData();
    }, [navigate]);


    const removeToken = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

  return (
    <div className='dashboardUser'>
        <h2>Dashboard</h2>
        <p>{message}</p>
        
        <button onClick={removeToken}>
            Logout            
        </button>
    </div>
  )
}

export default Dashboard