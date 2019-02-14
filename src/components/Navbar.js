import React from 'react'
import '../assets/css/navbar.css'
export default function Navbar(props) {
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          React Interview
        </div>
      </div>

      <input type="checkbox" id="nav-check"/>
      <div className="nav-links">
        <a href="https://github.com/YonnaR" target="_blank">Made with <i className="fas fa-heart"></i> by YonnaR</a>
      </div>
    </div>
  )
}

