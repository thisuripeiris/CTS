import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import Navbar from './Navbar';
import { useUser } from '../../userContext';

export default function MyOrder() {
    const { email } = useUser();
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        async function fetchMyOrder() {
            try {
                const res = await axios.get(`http://localhost:8000/orderData/get/${email}`);
                if (res.data.status === "Order fetch") {
                    const orderData = res.data.data;
                    setOrderData(orderData);
                } else {
                    console.error("Request failed with message:", res.data.message);
                }
            } catch (err) {
                console.error("Request failed with error:", err.message);
            }
        }
        fetchMyOrder();
    }, [email]);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderData.map(order => (
                        <div key={order._id} className='m-auto mt-5'>
                            {order.Order_date && <h4>{order.Order_date}</h4>}
                            <hr />
                            <div className='row'>
                                {order.items.map((item, index) => (
                                    <div key={index} className='col-12 col-md-6 col-lg-3'>
                                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                            <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                    <span className='m-1'>{item.qty}</span>
                                                    <span className='m-1'>{item.size}</span>
                                                    <span className='m-1'>{order.Order_date}</span>
                                                    <div className='d-inline ms-2 h-100 w-20 fs-5'>₹{item.price}/-</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
