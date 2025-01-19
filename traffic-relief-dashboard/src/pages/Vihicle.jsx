import React, { useState } from 'react';
import '../styles/Vihicle.css';

const VihiclePage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle tracking logic here
    console.log('Tracking number submitted:', trackingNumber);
  };

  const handleChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  return (
    <div className="shops-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="title">Track your order from all online shops</h1>
          <form className="tracking-form1" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                value={trackingNumber}
                onChange={handleChange}
                placeholder="Enter tracking numbers"
                className="tracking-input1"
                required
              />
              <button type="submit" className="submit-button">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="arrow-icon"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="image-section">
          <img 
            src="https://5.imimg.com/data5/SELLER/Default/2022/7/IC/RS/WF/13159848/gps-tracking-system-500x500.jpeg" 
            alt="Woman presenting tracking service" 
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default VihiclePage;