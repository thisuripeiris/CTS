import React, { useState } from 'react';
import tyreImg from './Images/tyreImg.png';
import './CSS/Card.css';
import QuantityButton from './QuantityButton';
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {
    const data = useCart();
    const dispatch = useDispatchCart();
    const [qty, setQty] = useState(1);

    const handlePopup = () => {
        alert("Quantity cannot exceed 10!");
    };

    const handleAddToCart = () => {
        if (qty > 10) {
            handlePopup();
            return;
        }

        let item = data.find(item => item.id === props.vehicleItem._id);
        if (item) {
            dispatch({ type: "UPDATE", id: props.vehicleItem._id, qty: qty });
        } else {
            dispatch({ type: "ADD", vehicleItem: props.vehicleItem, qty: qty });
        }
    }

    let finalPrice = qty * parseInt(props.vehicleItem.price);

    return (
        <div>
            <div className="card card-container">
                <img src={tyreImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="mb-2 card-title-row">
                        <h5 className="card-title">{props.vehicleItem.code}</h5>
                        <h6 className="V-model">{props.vehicleItem.vehicleModel}</h6>
                        <h6 className="V-size">{props.vehicleItem.size}</h6>
                    </div>
                    <div className="mb-2 card-text-row">
                        <p className="card-text">{props.vehicleItem.description}</p>
                    </div>
                </div>
                <div className="select-price-row">
                    <div className="select-price">
                        <QuantityButton qty={qty} setQty={setQty} handlePopup={handlePopup} />
                        <div className="price">{finalPrice}</div>
                    </div>
                    <div className="add-to-cart-btn">
                        <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
