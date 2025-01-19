import React from 'react';
import "../styles/SupportPage.css";
const SupportPage = () => {
  return (
    <div className="contact"> 
    <div className="container">
      <h1 className="title">Contact Emergency Team</h1>
      <p className="description">Submit the form below to get in touch with me</p>
      <form action="https://getform.io/f/pbqgnkkb" method="POST">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="text" name="email" placeholder="Enter your email" />
        <textarea name="message" placeholder="Enter your message" rows="6"></textarea>
        <button type="submit">Let's talk</button>
      </form>
     
    </div>
  </div>
  );
};

export default SupportPage;