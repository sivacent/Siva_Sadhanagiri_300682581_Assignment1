// Student Name: Siva Sadhanagiri
// Student ID: 300682581
// Date: 2024-09-25

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>YourLogo</h1> {/* Replace with your logo */}
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

