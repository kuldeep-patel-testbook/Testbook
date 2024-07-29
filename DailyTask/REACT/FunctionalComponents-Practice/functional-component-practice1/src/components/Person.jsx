import React from 'react';
// import '../../public/css/Person.css';

const Person = (props) => {
    const cstyle = {
        color:"white",
        backgroundColor: "lightpink"
    }
    return (
        <div className='person'>
            <h2 style={{backgroundColor:"lightblue", color:"white"}}>Name :  {props.name} </h2>
            <h2 style={cstyle}>Age : {props.age} </h2>
        </div>
    )
}

export default Person