import React, { useState } from 'react';
import "./Contact.css";

const ContactForm = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobilenumber :'',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        setSubmitted(true);

        setFormData({ name: '', email: '',mobilenumber:'' , message: '' });
    };

    return (
        <section className="contactpage">
            <p className='contact-subheading'>GET IN TOUCH</p>
            <h2 className='contact-heading'>Contact Us</h2>
            {submitted ? (
                <p>Thank you for reaching out! We will get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='name-input'
                            required
                            placeholder="what's your good name?"
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='email-input'
                            required
                            placeholder="what's your email?"
                        />
                    </div>
                    <div>
                        <label htmlFor='mobilenumber'>Your Number</label>
                        <input 
                            type="number"
                            name='mobilenumber'
                            value={formData.mobilenumber}
                            onChange={handleChange}
                            required
                            className='number-input'
                            maxLength={10}
                            minLength={10}
                            placeholder = "what's your Mobile Number?"
                        />    
                    </div>
                    <div>
                        <label>Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='message-input'
                            required
                            placeholder="what would you like to say?"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </section>
    );
};

export default ContactForm;
