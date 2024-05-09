import React from 'react';
import { useCart, useDispatchCart } from '../Components/ContextReducer';

const Cart = () => {
    const data = useCart();
    const dispatch = useDispatchCart();

    const handleCheckout = async () => {
        try {
            const response = await fetch('http://localhost:5000/orderData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    items: data,
                    order_date: new Date().toDateString(),
                    totalPrice: calculateTotalPrice(data)
                })
            });

            console.log("Order Response: ", response);
            if (response.ok) {
                console.log('Order placed successfully!');
                dispatch({ type: "DROP" });
            } else {
                console.error('Failed to place order');
            }
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
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <th scope='row'>{index + 1}</th>
                            <td>{item.code}</td>
                            <td>{item.qty}</td>
                            <td>{item.qty * item.price}</td>
                            <td><button type='button' className='btn p-0 bg-danger' onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div><h1 className='fs-2'>Total Price: {calculateTotalPrice(data)}</h1></div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className='btn bg-success m-5' onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
