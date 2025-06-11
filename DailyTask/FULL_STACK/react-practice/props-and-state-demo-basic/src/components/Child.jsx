import React, { useEffect, useState } from 'react'

const Child = (props) => {
    
    const [updateMsg, setUpdateMsg] = useState(props.message); 
    const [count, setCount] = useState(0);

    const handleCount = (e) => {
        e.preventDefault();

        setCount(count + 1);
        setUpdateMsg("This is a Parent Called - After Updated");

    };

    



  return (
    <div className='card'>
        <h2>{updateMsg} - {count}</h2>
        <button onClick={handleCount}>Count</button>
    </div>
  )
}

export default Child