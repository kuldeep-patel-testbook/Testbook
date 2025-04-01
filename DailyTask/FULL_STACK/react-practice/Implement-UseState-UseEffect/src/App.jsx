import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Welcome");

  useEffect(()=> {
    console.log(`Count Updated: ${count}`);
    setMessage(`You clicked ${count} times`);

    return () => {
      console.log('Component Cleanup');
    };

  }, [count]);



  return (
    <div style={{texctAlign:"center", marginTop:"50px"}}>
      <h1>{message}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  )
}

export default App