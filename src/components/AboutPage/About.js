import React from "react";
import "./About.css";

function About() {
  return (
    <section className="section">
      <div className="about-context">
        <p>JOIN US IN OUR MISSION TO ENHANCE ONLINE SAFETY AND DRIVE TECHNOLOGICAL INNOVATION.</p>
      </div>
      <div className="about-heading">
        <h1>ABOUT US.</h1>
      </div>
      <div className="about-content">
        <p>Engineers World, led by Mr Akshay Kumar, excels in creating user-friendly websites and innovative cybersecurity solutions. Our flagship product, PhishShield, uses advanced machine learning to protect against phishing attacks. We are dedicated to education, offering internships and online learning to nurture future tech leaders. Our team provides top-notch project and assignment solutions for universities and educational institutions, ensuring academic success.</p>
      </div>

      <div className="card-container">
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/webDevelopment.jpg`} alt="" />
          <h2>Web</h2>
          <h2>Developer</h2>
        </div>
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/reactNativeDevelopment.jpg`} alt="" />
          <h2>React Native Developer</h2>
        </div>
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/futureTech.jpg`} alt="" />
          
          <h2>Nurturing Future Tech Leaders</h2>
        </div>
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/PhishShield.jpg`} alt="" />
          <h2>Phish Shield</h2>
        </div>
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/AIML.jpg`} alt="" />
          <h2>AI ML</h2>
        </div>
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/CyberSecurity.jpg`} alt="" />
          <h2>Cyber Security</h2>
        </div>
      </div>
    </section>
  );
}

export default About;
