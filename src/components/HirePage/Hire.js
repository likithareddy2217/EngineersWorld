import React , {useEffect} from "react";
import "./Hire.css";
import { element } from "prop-types";

function Hire() {
  useEffect(()=>{
    const handleScroll = () => {
      const elements = document.querySelectorAll(".hirepage-feature");
      elements.forEach((element , index) =>{
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {  
          element.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="hirepage">
      <h1 className="hirepage-title">Empowering Academic Success and Online Safety Through Innovation</h1>
      <div className="hirepage-container">
        <div className="align-right">
          <div className="hirepage-feature">
            <h2>MISSION</h2>
            <p>to give our best and give the best product</p>
            <ul>
              <li>
                Our mission at Engineers World is to revolutionize the digital landscape by delivering innovative website development services.
              </li>
              <li>
                We strive to empower our clients and learners with the tools and knowledge necessary to thrive in an interconnected world.
              </li>
              <li>
                Fostering the growth of emerging tech talent, and pioneering advanced AI-driven cybersecurity solutions.
              </li>
              <li>
                We strive to empower our clients and learners with the tools and knowledge necessary to thrive in an interconnected world.
              </li>
            </ul>
          </div>
        </div>
        <div className="align-left">
          <div className="hirepage-feature">
            <h2>VISION</h2>
            <p>At Engineers World, our vision is to be the architects of a digital ecosystem.</p>
            <ul>
              <li>
                Where innovation, education, and security converge. We aim to set the standard for excellence in website development.
              </li>
              <li>
                Beacon for aspiring tech professionals through our comprehensive training.
              </li>
              <li>
                Implementing responsive design and ensuring cross-browser compatibility.
              </li>
              <li>
                Redefine cybersecurity with our cutting-edge AI and ML technologies.
              </li>
            </ul>
          </div>
        </div>
        <div className="align-right">
          <div className="hirepage-feature">
            <h2>WHY CHOOSE US?</h2>
            <p>For more details:</p>
            <ul>
              <li>
                We specialize in creating websites that are not only visually appealing but also tailored to meet your business needs, driving engagement and conversions.
              </li>
              <li>
                Through our internship programs and online training platforms, we provide the next generation of tech talent with essential skills.
              </li>
              <li>
                Knowledge needed to succeed in the ever-evolving tech industry.
              </li>
              <li>
                Stay ahead of threats with our AI and ML-based threat intelligence tool, designed to offer proactive and comprehensive protection.
              </li>
            </ul>
          </div>
        </div>
        <div className="align-left">
          <div className="hirepage-feature">
            <h2>LET US TOGETHER BUILD A FLOURISHING BUSINESS</h2>
            <p>To be successful, you have to have your heart in your business.</p>
            <ul>
              <li>
                When connected with us, you aren’t growing your business alone. We have your back and contribute to the growth of your entire team and organization.
              </li>
              <li>
                If you are looking for an agency to help build a solid online presence, bring in conversions, and increase revenue, we are here!
              </li>
            </ul>
          </div>
        </div>
        <div className="align-right">
          <div className="hirepage-feature">
            <h2>HIGHLY MOTIVATED TEAM WITH INNOVATIVE IDEAS</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hire;
