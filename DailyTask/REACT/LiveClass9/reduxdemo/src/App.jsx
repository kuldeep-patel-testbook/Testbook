/*import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from './Actions/Index';
import Data from './Data';

const App = () => {
  const dispatch = useDispatch();
  const changeProductQty = useSelector(state => state.changeProductQty);
  return (
    <div className='mainContainer'>
      <h1>Product Quantity</h1>
      <div className="counterDiv">
        <a href="#" onClick={()=> dispatch(Decrement())}><span>Decrement</span></a>
        <input type="text" value={changeProductQty} readOnly />
        <a href="#" onClick={()=> dispatch(Increment())}><span>Increment</span></a>
      </div>

      <hr />
      <Data />
    </div>
  )
}

export default App*/

import React from 'react'
import MainData from './ReduxToolKit/MainData'

const App = () => {
  return (
    <>
      <MainData />
      <hr />
    </>
  )
}

export default App