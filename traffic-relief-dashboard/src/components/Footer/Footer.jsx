import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Real-Time Services</h3>
          <ul>
            <li>Food & Essentials Delivery</li>
            <li>Dynamic Delivery Stations</li>
            <li>Location Tracking</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Transport Solutions</h3>
          <ul>
            <li>Quick Transport Alternatives</li>
            <li>Vehicle Tracking System</li>
            <li>Emergency Assistance</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Smart Features</h3>
          <ul>
            <li>AI Traffic Analysis</li>
            <li>Route Optimization</li>
            <li>Productivity Hub</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li>Eco-Friendly Rewards</li>
            <li>Traffic Updates</li>
            <li>Local Alerts</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Traffic Assistant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;