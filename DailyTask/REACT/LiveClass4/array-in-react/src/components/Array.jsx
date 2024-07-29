import React from 'react'

const Array = () => {
    let food = ['Pulses','Flour','Pizza','Burger','Biryani','Pasta'];
    console.log(food)
  return (
    <>
    <h1>Array in React</h1>
    <ul>
        {food.map(element => 
            <li>{element}</li>
        )}
    </ul>
    </>
  )
}

export default Array