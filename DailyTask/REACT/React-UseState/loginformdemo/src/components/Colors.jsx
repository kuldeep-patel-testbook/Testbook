import React, { useState } from 'react'

const Colors = () => {
    const [colors, setColors] = useState("red");
  return (
    <div>
        <h1>Show Color Using useState Method </h1>
        <h2>The Favourite color is {colors}!</h2>
        <button type='button' onClick={()=> setColors("Yellow")}>Change Color</button>
    </div>
  )
}

export default Colors