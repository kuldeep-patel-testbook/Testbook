// import React from 'react'

// const PropsDemo = ({sendData}) => {
//     const handleClick = () => {
//         const name = "Kuldeep Patel";
//         const designation = "Software Developer"
//         sendData(name, designation);
//     }
//   return (
//     <>
//         {/* <button type='button' onClick={() => propsData()}>Show Props Data</button> */}
//         <button onClick={handleClick}>Send Data to Parent</button>
//     </>
//   )
// }

// export default PropsDemo


import React from 'react'
import PropTypes from 'prop-types';

const PropsDemo = (props) => {
    
  return (
    <>
        <h1>{props.name}</h1>
        <h1>{props.designation}</h1>
    </>
  )
}

export default PropsDemo

PropsDemo.defaultProps = {
    name:"Default User",
    designation: "Default Designation"
}

PropsDemo.propsTypes = {
    name:PropTypes.string.isRequired,
}