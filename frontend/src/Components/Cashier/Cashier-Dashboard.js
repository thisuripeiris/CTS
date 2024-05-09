import React, { useState } from 'react';
import Headers from "../Staffheader";
import Product_Payment from '../Images/Product_Payment.png';
import Service_Payment from '../Images/Service_Payment.png';
import Stocks from '../Images/Stocks.png';
import "../CSS/HR-Dashboard.css";
import { Link } from 'react-router-dom'; // Import Link




export default function Cashier_Dashboard(){
    const [showColumn1, setShowColumn1] = useState(true);
    const [showColumn2, setShowColumn2] = useState(false);
    const [showButton, setShowButton] = useState(false); // State to track button visibility
    const [showColumn3, setShowColumn3] = useState(false); // State to track button visibility

    const toggleColumns = () => {
        setShowColumn1(!showColumn1);
        setShowColumn3(false);
        setShowColumn2(!showColumn2);
        setShowButton(true); // Show button after R3 click
    };

    
    const toggleColumns2 = () => {
        setShowColumn1(!showColumn1);
        setShowColumn2(false);
        setShowColumn3(!showColumn3);
        setShowButton(true); // Show button after R3 click
    };

    const handleReturn = () => {
        setShowColumn1(true);
        setShowColumn2(false);
        setShowColumn3(false);
        setShowButton(false); // Hide button on return
    };



    return(
        <body className='HR-Dashboard'>
            <Headers />
            <main>
                <div className='HRManager-Dashboard'>
                    {showColumn1 && (
                        <div className='HR-Column1' >
                            <div className='R1' onClick={toggleColumns}>
                                <img src={Product_Payment} alt="Product_Payment" />
                                <h1>Product Payment</h1>
                            </div>
                            <div className='R2' onClick={toggleColumns2}>
                                <img src={Service_Payment} alt="Service_Payment" />
                                <h1>Service Payment</h1>
                            </div>
                            <div className='R3' >
                                <img src={Stocks} alt="Stocks" />
                                <h1 >Stock Count</h1>
                            </div>
                        </div>
                    )}
                    {showColumn2 && (
                        <div className='HR-Column2'>
                            <div className='R4'>
                                <Link to='../Product_Payment'>
                                    <img src={Product_Payment} alt="Product_Payment" />
                                    <h1>Add Product Payment</h1>
                                </Link>
                            </div>
                            <div className='R5'>
                            <Link to='/View_Product_Payment'>
                                <img src={Product_Payment} alt="Product_Payment" />
                                <h1>View Product Payment</h1>
                                </Link>
                            </div>
                        </div>
                    )}
                     {showColumn3 && (
                        <div className='HR-Column2'>
                            <div className='R4'>
                                <Link to='/Service_Payment'>
                                    <img src={Service_Payment} alt="Service_Payment" />
                                    <h1>Add Service Payment</h1>
                                </Link>
                            </div>
                            <div className='R5'>
                            <Link to='/View_Service_Payment'>
                                <img src={Service_Payment} alt="Service_Payment" />
                                <h1>View Service Payment</h1>
                                </Link>
                            </div>
                        </div>
                    )}
                    {showButton && <button type='button' id='HRReturn' onClick={handleReturn}>Return</button>}
                </div>
            </main>
        </body>
    )
}