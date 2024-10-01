import React from 'react';
import '../styles/Sidebar.css';
import logo from '../assets/logo1.png'; // Sample logo image

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>Investors</li>
        <li>Careers</li>
        <li>About Us</li>
        <li>News</li>
        <li>Address</li>
        <li>Loan Application</li>
        <li>E-Cards</li>
        <li>E-Auction</li>
        <li>Subscriptions</li>
        <li>NACH Mandate</li>
        <li>Update Password</li>
        <li>Log Out</li>
      </ul>
    </div>
  );
};

export default Sidebar;
