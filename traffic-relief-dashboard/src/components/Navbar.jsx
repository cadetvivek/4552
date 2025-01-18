import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRie-7QrFEmS3PRkQ0wpf2CT0tomy_DAnPRVxQhJ7OGdI5Jm4t5" alt="Ship24 Logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">Couriers</Link>
          <Link to="/shops">Shops</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>
      <div className="navbar-right">
        <select className="language-select">
          <option value="en">English</option>
          <option value="en"> हिंदी</option>
          {/* Add more language options */}
        </select>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;