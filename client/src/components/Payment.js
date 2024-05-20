import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const [amount, setAmount] = useState('');

    const handlePayment = async () => {
        const response = await axios.post('/api/create-charge', { amount });
        window.location.href = response.data.hosted_url;
    };

    return (
        <div>
            <h1>Make a Payment</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount in USD"
            />
            <button onClick={handlePayment}>Pay with ETH</button>
        </div>
    );
};

export default Payment;
