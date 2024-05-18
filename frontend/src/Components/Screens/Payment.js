// Payment.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart, useDispatchCart } from '../ContextReducer';
import { useUser } from '../../userContext';

const Payment = () => {
    const location = useLocation();
    const { id } = location.state || {};

    const { email } = useUser();
    const navigate = useNavigate();
    const dispatch = useDispatchCart();

    const [profile, setProfile] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        tel: '',
        password: ''
    });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        date: new Date().toISOString().split('T')[0],
        price: '', // Will be set dynamically
        slip: null
    });

    useEffect(() => {
        async function getProfile() {
            try {
                const res = await axios.get(`http://localhost:8000/Customer/get/${email}`);
                if (res.data.status === "Customer fetch") {
                    const profileData = res.data.data[0];
                    setProfile(profileData);
                } else {
                    console.error("Request failed with message:", res.data.message);
                }
            } catch (err) {
                console.error("Request failed with error:", err.message);
            }
        }
        getProfile();
    }, [email]);

    const cart = useCart(); // Get the cart data from the context

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send payment data to backend
            await axios.post('http://localhost:8000/orderData', {
                firstName: profile.firstName,
                lastName: profile.lastName,
                email: profile.email,
                address: profile.address,
                items: cart.map(item => ({ code: item.code, qty: item.qty, price: item.price })),
                totalPrice: cart.reduce((total, item) => total + (item.qty * item.price), 0)
            });
            // Clear cart after successful payment
            dispatch({ type: "CLEAR_CART" });
            // Navigate to home page
            navigate('/MyOrders');
            alert('Payment successful!');
        } catch (error) {
            console.error('Failed to make payment:', error);
            alert('Failed to make payment');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="w-50 p-3 border rounded">
                <h2 className="my-4 text-center">Payment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <div className="col">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" value={profile.firstName} readOnly />
                        </div>
                        <div className="col">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" value={profile.lastName} readOnly />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={profile.email} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" name="address" value={profile.address} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input type="text" className="form-control" id="date" name="date" value={formData.date} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text" className="form-control" id="price" name="price" value={cart.reduce((total, item) => total + (item.qty * item.price), 0)} required />
                    </div>
                    <div style={{ width: '100px', alignItems: 'center' }}>
                        <button type="submit" className="btn btn-primary w-100" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;

