import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRie-7QrFEmS3PRkQ0wpf2CT0tomy_DAnPRVxQhJ7OGdI5Jm4t5"
            alt="Ship24 Logo"
          />
        </Link>

        <div className="nav-links">
          <Link to="/">Traffic Relief Dashboard</Link>
          <Link to="/tracking">Real-Time Location</Link>

          <Link to="/vihicle">Vehicle Tracking</Link>
          <Link to="/hub">Productivity Hub</Link>
          <Link to="/support">Emergency Support</Link>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

