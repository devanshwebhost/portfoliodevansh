import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      user_email: email,
      message: message,
    };

    emailjs.send('service_mk6gwgd', 'template_z5djnlh', templateParams, 'y3trjdXSeLWj_hckY')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="email-form">
        <h2>Contact Us</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
