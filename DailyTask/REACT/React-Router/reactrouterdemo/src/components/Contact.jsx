import React from 'react'
import Navbar from './Navbar'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <h1>Inside a Contact Component</h1>
        <NavLink to={'location'}>Search Locations</NavLink>
        <NavLink to={'form'}>Fill Form</NavLink>
        
        {/* <Link to={'location'}>Search Locations</Link> */}
        {/* <Link to={'form'}>Fill Form</Link> */}
        <Outlet/>
    </div>
  )
}

export default Contact