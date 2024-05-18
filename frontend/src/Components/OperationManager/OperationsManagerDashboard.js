// // OperationsManagerDashboard.js

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const OperationsManagerDashboard = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/orderData');
//                 setOrders(response.data);
//             } catch (error) {
//                 console.error('Error fetching orders:', error.message);
//             }
//         };

//         fetchOrders();
//     }, []);

//     const handleStatusUpdate = async (orderId, status) => {
//         try {
//             await axios.put(`http://localhost:8000/orders/${orderId}`, { status });
//             // Refresh orders after update
//             const response = await axios.get('http://localhost:8000/orderData');
//             setOrders(response.data);
//         } catch (error) {
//             console.error('Error updating order status:', error.message);
//         }
//     };

//     return (
//         <div>
//             <h1>Operations Manager Dashboard</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Order ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                         <th>Total Price</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map(order => (
//                         <tr key={order._id}>
//                             <td>{order._id}</td>
//                             <td>{order.firstName}</td>
//                             <td>{order.lastName}</td>
//                             <td>{order.email}</td>
//                             <td>{order.address}</td>
//                             <td>{order.totalPrice}</td>
//                             <td>{order.status}</td>
//                             <td>
//                                 <button onClick={() => handleStatusUpdate(order._id, 'accepted')}>Accept</button>
//                                 <button onClick={() => handleStatusUpdate(order._id, 'declined')}>Decline</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default OperationsManagerDashboard;
import React, { useState, useEffect } from "react";
import axios from "axios";

const OperationsManagerDashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8000/orderData');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error.message);
            }
        };

        fetchOrders();
    }, []);

    const handleStatusUpdate = async (orderId, status) => {
        try {
            await axios.put(`http://localhost:8000/orders/${orderId}`, { status });
            // Refresh orders after update
            const response = await axios.get('http://localhost:8000/orderData');
            setOrders(response.data);
        } catch (error) {
            console.error('Error updating order status:', error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Operations Manager Dashboard</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Items</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.firstName}</td>
                            <td>{order.lastName}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td>
                                <ul>
                                    {order.items.map(item => (
                                        <li key={item.code}>
                                            <div>Code: {item.code}</div>
                                            <div>Quantity: {item.qty}</div>
                                            <div>Price: ${item.price.toFixed(2)}</div>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>${order.totalPrice.toFixed(2)}</td>
                            <td>{order.status}</td>
                            <td>
                                <button className="btn btn-success me-2" onClick={() => handleStatusUpdate(order._id, 'accepted')}>Accept</button>
                                <button className="btn btn-danger" onClick={() => handleStatusUpdate(order._id, 'declined')}>Decline</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OperationsManagerDashboard;
