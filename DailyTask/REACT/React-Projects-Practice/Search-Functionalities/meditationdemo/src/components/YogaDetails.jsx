import React from 'react'

const YogaDetails = ({ yoga }) => {
    return (
        <div>
            <h2>{yoga.name}</h2>
            <p>{yoga.description}</p>
            <img src={yoga.image} alt={yoga.name} />
        </div>
    )
}

export default YogaDetails