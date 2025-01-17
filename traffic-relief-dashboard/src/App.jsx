import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  const handleNavLinkClick = () => {
    document.getElementById('nav-toggle').checked = false;
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Traffic Relief Dashboard</div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end activeClassName="active" onClick={handleNavLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={handleNavLinkClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active" onClick={handleNavLinkClick}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={handleNavLinkClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
