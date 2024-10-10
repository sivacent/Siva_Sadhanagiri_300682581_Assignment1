// Student Name: Siva Sadhanagiri
// Student ID: 300682581
// Date: 2024-09-25

// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>To work hard and achieve good grades.</p>
            <Link to="/about">
                <button>Learn More About Me</button>
            </Link>
        </div>
    );
};

export default Home;
