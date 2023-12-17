import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  
  return (
    <nav>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/layanan">Layanan</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/pesanlayanan" className="primary-button">Pesan Layanan</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
