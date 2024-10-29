import React from "react";
import { Link } from "react-router-dom";
import './link.css'

const Navbar = () => {
  return (
    <div>
      <nav className="link-container">
        <Link to='/'>Home</Link>
        
        <Link to='/about'>About</Link>
        
        <Link to='/contact'>Contact us</Link>
        <Link to='/user'>User</Link>
        
      </nav>
    </div>
  );
};

export default Navbar;
