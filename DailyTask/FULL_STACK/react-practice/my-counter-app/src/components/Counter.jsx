import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount( count + 1 );
    const decrement = () => setCount( count - 1);
    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Implement React Counter Using useState</h2>
            <h1>{count}</h1>

            <button onClick={increment}> ➕ Increment </button>
            <button onClick={decrement}> ➖ Decrement </button>
            <button onClick={reset}>🔄 Reset</button>
        </div>
    )
}

export default Counter