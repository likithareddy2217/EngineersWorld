import React from 'react';
import "./navigation.css";

function Header() {
  return (
    <header>
      <div className='logo-div'>
        <img src="./images/logo.jpg" alt="Logo" height={40} width={40} />
        <h1>ENGINEER'S WORLD</h1>
      </div>
      <nav className='nav'>
        <div className='links'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Experience</a>
          <a href="#">Leadership</a>
          <a href="#">Hire Us</a>
        </div>
        <button className='nav-btn'>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
