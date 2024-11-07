<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import "./navigation.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
=======
import React from 'react';
import "./navigation.css";

function Header() {
  return (
    <header>
>>>>>>> 2d6720ad01166adda161dab147a40f3a70f6ddd7
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
<<<<<<< HEAD
    
=======
>>>>>>> 2d6720ad01166adda161dab147a40f3a70f6ddd7
  );
}

export default Header;
