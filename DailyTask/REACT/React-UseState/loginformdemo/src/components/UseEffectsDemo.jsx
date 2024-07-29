import React, { useEffect, useState } from 'react'

const UseEffectsDemo = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = (`Use Effect Test Value is ${counter}`);
        console.log(document.title);
    }, [counter]);

    return (
        <div>
            <h1>UseEffectsDemo</h1>
            <h2>Current Value is {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Added By 1</button>
        </div>
    )
}

export default UseEffectsDemo