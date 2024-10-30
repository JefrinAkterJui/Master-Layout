import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="main_manu">
      <div className="container">
       <div className="manu">
       <div className="logo"><img src="/imge/logo.png" alt="logo" /></div>

      <div className="manu_row">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/LayOutTow">Support</Link></li>
          <li><Link to="/LayOutTow/help">Help</Link></li>
          <li><Link to="/LayOutThree">Services</Link></li>
        </ul>
      </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar