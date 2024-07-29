import React from 'react'

const ArrayDemo2 = () => {
    const fruits =[
        "Apple",
        "Mango",
        "Orange",
        "Banana",
        "Pineapple",
        "Peach",
        "Strawberry",
        "Blueberry"
    ]
  return (
    <div>
        {console.log(fruits.length, fruits)}
        {fruits.map((dataFruit, key)=> <p key={key}>{dataFruit}</p>)}
    </div>
  )
}

export default ArrayDemo2