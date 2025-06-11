import React, { memo, useCallback, useState } from 'react'

const Button = memo(({onClickHandle, children}) => {
    console.log(`Rendering Button: ${children}`);
    return <button onClick={onClickHandle}>{children}</button>;
});

const UseCallback = () => {
    const [count, setCount] = useState(0);
    
    const increment =useCallback(() => {
        console.log("Increment Inside");
        setCount((prev) => prev + 1);
    }, []);

    const decrement =useCallback(() => {
        console.log("decrement Inside");
        setCount((prev) => prev - 1);
    }, []);

  return (
    <div>
        <h1>Count: {count} </h1>
        <Button onClickHandle={increment}>Increment</Button>
        <Button onClickHandle={decrement}>Decrement</Button>
    </div>
  )
}

export default UseCallback