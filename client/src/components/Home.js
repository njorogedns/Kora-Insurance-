import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Welcome to Car Insurance</h1>
        <Link to="/dashboard">Go to Dashboard</Link>
    </div>
);

export default Home;
