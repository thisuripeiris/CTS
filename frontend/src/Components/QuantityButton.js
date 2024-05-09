import React from 'react';

const QuantityButton = ({ qty, setQty, handlePopup }) => {
    const increaseCount = () => {
        if (qty < 10) {
            setQty(qty + 1);
        } else {
            handlePopup();
        }
    };

    const decreaseCount = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    return (
        <button className="btn btn-sm" style={{ backgroundColor: 'gray', color: 'white' }}>
            <span onClick={decreaseCount} style={{ marginRight: '5px' }}>-</span>
            {qty}
            <span onClick={increaseCount} style={{ marginLeft: '5px' }}>+</span>
        </button>
    );
};

export default QuantityButton;
