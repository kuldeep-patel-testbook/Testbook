import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementBypayload, increment, incrementBypayload } from '../app/features/counter/counterSlice';

const Counter = memo(() => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);
  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);

  const handleIncrementByLoad = useCallback(() => dispatch(incrementBypayload(10)), [dispatch]);
  const handleDecrementByLoad = useCallback(() => dispatch(decrementBypayload(4)), [dispatch]);


  return (
    <div>
        <h1>Counter Example</h1>
        <h2>Count: {counter}</h2>

        <button type='button' onClick={handleIncrement}>➕Increment</button>
        <button type='button' onClick={handleDecrement}>➖Decrement</button>

        <button type='button' onClick={handleIncrementByLoad}>➕Increment By 10</button>
        <button type='button' onClick={handleDecrementByLoad}>➖Decrement By 4</button>
    </div>
  )
});

export default Counter