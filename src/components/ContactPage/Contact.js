import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobilenumber: '',
    message: '',
  });
  const [step, setStep] = useState(0); 
  const [visited, setVisited] = useState([false, false, false, false]); 
  const [errors, setErrors] = useState({ name: '', email: '', mobilenumber: '', message: '' }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const handleNext = () => {
    if (step === 0) {
      if (formData.name === '') {
        setErrors({ ...errors, name: 'Please enter your name.' });
      } else {
        setVisited([true, false, false, false]);
        setStep(1);
      }
    } else if (step === 1) {
      if (formData.email === '') {
        setErrors({ ...errors, email: 'Please enter your email.' });
      } else {
        setVisited([true, true, false, false]);
        setStep(2);
      }
    } else if (step === 2) {
      if (formData.mobilenumber === '') {
        setErrors({ ...errors, mobilenumber: 'Please enter your mobile number.' });
      } else {
        setVisited([true, true, true, false]);
        setStep(3);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.mobilenumber && formData.message) {
      console.log('Form Data Submitted:', formData);
      setFormData({ name: '', email: '', mobilenumber: '', message: '' });
      setVisited([false, false, false, false]);
      setStep(0);
    } else {
      setErrors({
        ...errors,
        message: 'Please complete all fields before submitting.',
      });
    }
  };

  return (
    <section className="contactpage">
      <p className="contact-subheading">GET IN TOUCH</p>
      <h2 className="contact-heading">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className={`form-step ${visited[0] ? 'visited' : ''} ${step === 0 ? 'visible' : ''}`}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="What's your good name?"
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <button type="button" className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>

        <div className={`form-step ${visited[1] ? 'visited' : ''} ${step === 1 ? 'visible' : ''}`}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="What's your email?"
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <button type="button" className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>

        <div className={`form-step ${visited[2] ? 'visited' : ''} ${step === 2 ? 'visible' : ''}`}>
          <label htmlFor="mobilenumber">Your Number</label>
          <input
            type="tel"
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleChange}
            required
            placeholder="What's your Mobile Number?"
          />
          {errors.mobilenumber && <span className="error">{errors.mobilenumber}</span>}
          <button type="button" className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>

        <div className={`form-step ${visited[3] ? 'visited' : ''} ${step === 3 ? 'visible' : ''}`}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="What would you like to say?"
          />
          {errors.message && <span className="error">{errors.message}</span>}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
