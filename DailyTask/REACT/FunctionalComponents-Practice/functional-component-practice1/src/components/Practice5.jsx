import React from 'react'
import { useState } from 'react'

const Practice5 = () => {
    const [counter, setCounter] = useState(0);
    const clickHandler = () => {
        const updateCounter = counter + 1;
        setCounter(updateCounter);
    }
    const decriseHandler = () => {
        const updateCounter = counter - 1;
        setCounter(updateCounter);
    }
  return (
    <div>
        <div>Counter Value: {counter}</div>
        <button onClick={clickHandler}>
            Increase Counter
        </button>
        <button onClick={decriseHandler}>
            Decrease Counter
        </button>
    </div>
 
  )
}

export default Practice5