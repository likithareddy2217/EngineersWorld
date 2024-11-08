import React, { useEffect, useState } from 'react';
import "./navigation.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className='logo-div'>
        <img src="/images/logo.jpg" alt="Logo" height={40} width={40} />
        <h1>ENGINEER'S WORLD</h1>
      </div>
      <nav className='nav'>
        <div className='links'>
          <a href="#">Home</a>
          <a href="/components/AboutPage/About.js">About Us</a>
          <a href="#">Hire Us</a>
          <a href='#'>Contact Us</a>
        </div>
        <button className='nav-btn' >Contact</button>
      </nav>
    </header>
  );
}

export default Header;
