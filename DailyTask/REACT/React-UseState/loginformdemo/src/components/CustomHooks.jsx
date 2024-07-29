import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch'

const CustomHooks = () => {
    /*const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((res)=> res.json())
        .then((data) => setData(data));
    }, []);*/

    {/* Use Cutom hooks */}
    // const [data] = UseFetch('https://jsonplaceholder.typicode.com/todos/');
    const [data] = UseFetch('https://jsonplaceholder.org/posts');
    
  return (
    <div>
        <h1>API Data Fetch using Custom Hooks Functions </h1>
        {
            data && data.map((item) => {
                return (
                    <p key={item.id}><span>{item.id} : </span>{item.title}</p>
                )
            })
        }

    </div>
  )
}

export default CustomHooks