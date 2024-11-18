import React, { useEffect, useState } from 'react';
import "./navigation.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className='logo-div'>
        <img src={`${process.env.PUBLIC_URL}/images/EWlogo.jpg`} alt="Logo" height={40} width={40} />
        <h1>ENGINEER'S WORLD</h1>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <div className='links'>
          <a href="#homepage">Home</a>
          <a href="#aboutpage">About Us</a>
          <a href="#hirepage">Hire Us</a>
          <a href='#contactpage'>Contact Us</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
