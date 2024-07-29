import React from 'react'
import { useDispatch, useSelector } from "react-redux";
// import Data from './Data';
import { decrement, increment } from './CounterSlice';

const MainData = () => {
    const dispatch = useDispatch();
    const changeProductQty = useSelector(state => state.counter.counter);
  return (
    <>
      <h1>Product Quantity</h1>
      <div className="counterDiv">
        <a href="#" onClick={()=> dispatch(decrement())}><span>Decrement</span></a>
        <input type="text" value={changeProductQty} readOnly />
        <a href="#" onClick={()=> dispatch(increment())}><span>Increment</span></a>
      </div>

      <hr />
      {/* <Data /> */}
    </>
  )
}

export default MainData