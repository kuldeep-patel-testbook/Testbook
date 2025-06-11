import React, { useMemo, useState } from 'react'
import MemoCount from './MemoCount';

const ReactMemo = () => {
    const [count, setCount] = useState(0);

    const myBioData = useMemo(() => {
      return {
        id: 1,
        name: "Kuldeep",
        age: 32
      }
    }, []);

  return (

    <>
    <div className='App'>
        <h1>{count}</h1>
        <button className='btn-blue' onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
    <MemoCount bioData={myBioData} />
    </>
  )
}

export default ReactMemo