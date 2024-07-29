import React from 'react'
import PropTypes from 'prop-types';

const FavColor = (userData, props) => {
  
//const FavColor = ({name, color}) => {
    const name = props.name;
    const color = props.color;
    const refine = props.refine;
    const {uname, umarks} = userData;
  return (
    <div>
        <h1>My Name is {name}. </h1>
        <p>My Favorite color is {color}.</p>
        <p>Fruit Refine is {refine}%.</p>
        <p>Userdata name is {uname}.</p>
        <p>Userdata marks is {umarks}.</p>
    </div>
  )
}


export default FavColor

FavColor.defaultProps = {
  name: "Default User",
  color: "transperent"
}

FavColor.propTypes = {
  refine: PropTypes.number.isRequired,
};