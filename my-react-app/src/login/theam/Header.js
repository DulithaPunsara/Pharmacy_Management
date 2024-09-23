// src/Header.js
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./Header.css";





const Header = () => {


  const navigate = useNavigate();

  const handleLogout = () => {
    // You can also clear any auth tokens or session data here if needed.
    navigate('/');
  };





  return (
    <header className="header">
      <div className="logo">PharmaNet</div>
      <nav className="nav">
      </nav>
      <div className="logout" onClick={handleLogout}>
        <FaSignOutAlt className="icon" />
        <span>Logout</span>
      </div>
    </header>
  );
};

export default Header;
