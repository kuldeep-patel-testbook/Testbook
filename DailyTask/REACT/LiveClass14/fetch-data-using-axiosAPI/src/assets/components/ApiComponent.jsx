import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ApiComponent = () => {
    const [data, setData] = useState([]);
    const myStyle = {
        listStyle: "none",
        marginRight: "auto",
        marginLeft: "auto",
        border: "0.1px solid black",
        width: 500,
        textAlign: "justify",
    }
    useEffect(() => {
        const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
        axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            setData(allRepos);
        });
    }, [setData]);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Available Repositories</h1>
            <ul style={myStyle}>
                {
                    data && data.map((item) => (
                        <li key={item.id} style={{ padding: 5 }}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ApiComponent