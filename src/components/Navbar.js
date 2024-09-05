import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <img src='./assets/cfi-logo.png' style={{width:'400px', height:'100px', padding:'20px 50px', marginLeft:'-5vw'}} alt=''/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" style={{fontSize:'1.4vw'}} id="navbarNav">
        <ul className="navbar-nav ms-auto  gap-2">
          <li className="nav-item">
            <Link className="nav-link" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Learn">Learn</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar