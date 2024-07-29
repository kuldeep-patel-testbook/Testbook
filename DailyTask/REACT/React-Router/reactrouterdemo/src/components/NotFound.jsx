import React from 'react'
import './NotFound.css';
import NotFoundImage from '../assets/404Notfound.png';

const NotFound = () => {
  return (
    <div className='errorContainer'>
        <img src={NotFoundImage} alt="Not Found" className="not-found-image" />
    </div>
  )
}

export default NotFound