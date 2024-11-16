import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin , faTelegram , faInstagram , faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {

  return (
    <footer className="footer-container">
      <div className="sub-container">
        <p className="copyright">&copy; 2024 <strong>ENGINEERS WORLD</strong>. All Rights Reserved.</p>
        <p className="media-info">Follow us on our social media platforms for the latest updates:</p>
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/company/engineers-world-pvt-ltd/about/?viewAsMember=true" target="_blank" >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.youtube.com/@engineersworld1787" target="_blank" >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://t.me/joinchat/3qDdcVA7NR1lOGQ1" target="_blank" >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://www.instagram.com/engineer_s__world/" target="_blank" >
            <FontAwesomeIcon icon={faInstagram} />
          </a>          
        </div>
      </div>
      <div className="sub-div">
        <h1>For any queries please contact us:</h1>
        <p>engineersworldofficial@gmail.com</p>
      </div>
    </footer>
  );
}
export default Footer;