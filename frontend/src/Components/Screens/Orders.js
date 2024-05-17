// import React from 'react'
// import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'

// export default function MyOrders() {
//     return (
//         <div>
//             <div><Navbar /></div>
//             <div><Footer /></div>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8000/orders'); // Assuming an endpoint to fetch orders
                console.log("Orders Response: ", response.data);
                setOrders(response.data.orders); // Assuming the API returns orders array
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="orders">
            <h1>My Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order Date</th>
                        <th>Total Price</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.order_date}</td>
                            <td>{order.totalPrice}</td>
                            {/* Add more cells for other data */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
