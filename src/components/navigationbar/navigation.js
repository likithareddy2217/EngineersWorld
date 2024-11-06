import React from 'react';
import './navigation.css'

const NavigationComponent = () => {
  return (
    <div className='navigation'>
      <h1>Engineers world </h1>
      <div className='links'>
        <a href=""> Home</a>
        <a href=""> About</a>
        <a href=""> Experience</a>
        <a href=""> Leadership</a>
        <a href=""> Hire us</a>
      </div>
      <button className='contactBtn'>Contact Us</button>
    </div>
  );
};

export default NavigationComponent;
