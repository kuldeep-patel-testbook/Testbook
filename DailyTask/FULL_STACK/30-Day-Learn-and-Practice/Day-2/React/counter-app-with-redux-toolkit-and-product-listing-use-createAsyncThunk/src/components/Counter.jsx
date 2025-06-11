import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementBy, decrementBy } from '../app/features/counter/counterSlice';
const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter Using Redux Toolkit</h1>
        
        <div className='card'>
            <h2>Count: {counter}</h2>
            
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementBy(5))}>Increment By 5</button>
            <button onClick={() => dispatch(decrementBy(3))}>Decrement By 3</button>
        </div>

    </div>
  )
}

export default Counter