import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <div>
      <div className="linkContainer">
        <ul className="customTopicLink">
          <li className="nav-item-custom">
            <Link className="nav-link-custom" to="/jsstuff">Javascript Topics</Link>
          </li>
          <li className="nav-item-custom">
            <Link className="nav-link-custom" to="/nodestuff">NodeJs Topics</Link>
          </li>
          <li className="nav-item-custom">
            <Link className="nav-link-custom" to="/reactstuff">ReactJs Topics</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home