import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial-section">
      <h6 className="testimonial-subheading">WHAT OTHERS SAY</h6>
      <h1 className="testimonial-heading">Testimonial</h1>
      <div className="testimonial-container">
        <div className="testimonial-quote">
          <h1>"</h1>
          <p>I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.</p>
          <div className="testimonial-info">
            <div>
              <h1>@Sara Lee</h1>
              <p>CFO of Acme Co</p>
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/Testimonials/saralee.jpg`} alt="" />
            </div>
          </div>
        </div>
        <div className="testimonial-quote">
          <h1>"</h1>
          <p>I've never met a web developer who truly cares about their clients' success like Rick does.</p>
          <div className="testimonial-info">
            <div>
              <h1>@Chris Brown</h1>
              <p>COO of DEF Corp</p>
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/Testimonials/chrisbrown.jpg`} alt="" />
            </div>
          </div>
        </div>
        <div className="testimonial-quote">
          <h1>"</h1>
          <p>After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!</p>
          <div className="testimonial-info">
            <div>
              <h1>@Lisa Wang</h1>
              <p>CTO of 456 Enterprises</p>
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/Testimonials/lisawang.jpg`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;