import React from 'react'
import { useSelector } from 'react-redux'

const Data = () => {
    const data = useSelector(state => state.changeProductQty);
  return (
    <>
       <p>The Value is {data} </p>
    </>
  )
}

export default Data