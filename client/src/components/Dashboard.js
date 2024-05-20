import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setMessage('Not authenticated');
                return;
            }
            try {
                const response = await axios.get('/api/dashboard', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Error fetching data');
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{message}</p>
        </div>
    );
};

export default Dashboard;
