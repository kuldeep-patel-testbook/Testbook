import React, { Component } from 'react'
import './Styling.css';

export default class Header extends Component {
    
  render() {
    return (
      <div className="Header">
        <div className="NavItems">
            <a href='#' className='HeaderItem'>
                Home
            </a>
            <a href='#' className='HeaderItem'>
                Posts
            </a>
            <a href='#' className='HeaderItem'>
                About
            </a>
        </div>
        <input type="text" className='SearchField' />
        <input type="button" value="Search" className='SearchBtn' />
      </div>
    )
  }

}
