import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
    <div className="left-section">
      <img
        src="https://logodix.com/logo/871293.png"
        alt=""
        style={{ width: "70px", height: "70px", marginRight: "5px" }}
      />
    </div>
    <div className="middle-section">
      <Link to="/">Home</Link>
      <Link to="/add">Add student</Link>
     
    </div>
    <div className="right-section">
        
      </div>
  </div>
  )
}

export default Navbar