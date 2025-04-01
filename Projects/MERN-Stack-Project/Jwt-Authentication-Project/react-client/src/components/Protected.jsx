import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
const API_BASE_URL = import.meta.env.VITE_API_URL;

const Protected = (user) => {
    const [data, setData] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`${API_BASE_URL}/protected`, {
                    headers: { Authorization: token },
                });
                setData(res.data.message);
            } catch (error) {
                setData("Access denied");
            }
        };
        fetchData();
    }, []);
  return (
    <div className='protected'>
        return <h2>{data}</h2>;
    </div>
  )
}

export default Protected