import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Navbar/>
        <h1>Inside a About Component</h1>

        <NavLink to='/student/peter'>Student 1</NavLink>
        <NavLink to='/student/kuldeep'>Student 2</NavLink>
        <NavLink to='/student/saiyam'>Student 3</NavLink>
    </div>
  )
}

export default About