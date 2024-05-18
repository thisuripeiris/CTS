import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../userContext'; // Update the path based on your project structure
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyOrders = () => {
    const { email } = useUser(); // Get the email from the user context
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Fetch orders related to the user's email
                const response = await axios.get(`http://localhost:8000/orderData/get/${email}`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error.message);
            }
        };

        if (email) { // Fetch orders only if email is available
            fetchOrders();
        }
    }, [email]);

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                {orders.length > 0 ? (
                    <div className="row">
                        {orders.map(order => (
                            <div key={order._id} className="col-md-6 mb-4">
                                <div className="card shadow-sm">
                                    <div className="card-header bg-dark text-white">
                                        <h5 className="card-title">Order ID: {order._id}</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6>Items:</h6>
                                        <div className="table-responsive">
                                            <table className="table table-dark table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Code</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {order.items.map(item => (
                                                        <tr key={item.code}>
                                                            <td>{item.code}</td>
                                                            <td>{item.qty}</td>
                                                            <td>${item.price.toFixed(2)}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <h6 className="mt-3">Total Price: ${order.totalPrice.toFixed(2)}</h6>
                                        <span className={`badge ${order.status === 'success' ? 'bg-success' : 'bg-warning'}`}>
                                            {order.status === 'success' ? 'Success' : 'Pending'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="alert alert-info text-center" role="alert">
                        No orders found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
