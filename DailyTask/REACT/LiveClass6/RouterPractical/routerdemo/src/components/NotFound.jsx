import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundImage from '../assets/404Notfound.png';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <img src={NotFoundImage} alt="Not Found" className="not-found-image" />
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="home-link">Go to Home</Link>
        </div>
    )
}

export default NotFound