import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart, useDispatchCart } from '../Components/ContextReducer';

const Cart = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const data = useCart();
    const dispatch = useDispatchCart();

    const handleCheckout = async () => {
        try {
            // Calculate total price
            const totalPrice = calculateTotalPrice(data);
            // Navigate to Payment.js
            navigate('/payment');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + (item.qty * item.price), 0);
    };

    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
            </div>
        );
    }

    return (
        <div className="cart-popup">
            <table className='table table-hover'>
                <thead className='text-success fs-4'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Code</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <th scope='row'>{index + 1}</th>
                            <td>{item.code}</td>
                            <td>{item.qty}</td>
                            <td>{item.qty * item.price}</td>
                            <td>
                                <button type='button' className='btn btn-danger' onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='text-end'>
                <div><h1 className='fs-2'>Total Price: {calculateTotalPrice(data)}</h1></div>
                <div><button className='btn btn-success' onClick={handleCheckout}>Checkout</button></div>
            </div>
        </div>
    );
};

export default Cart;
