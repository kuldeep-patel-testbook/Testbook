import React from 'react'

const ArrayInProps = (props) => {
  return (
    <>
    <h1>Array Using Props in React</h1>
    <ul>
        {props.food.map(element => 
            <li>{element}</li>
        )}
    </ul>
    </>
  )
}

export default ArrayInProps