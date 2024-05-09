import React, { useState } from 'react';
import Headers from "../Staffheader";
import Attendence from '../Images/Attendence.png';
import Stock_Payment from '../Images/Stock_Payment.png';
import payroll from '../Images/payroll.png';
import { Link } from 'react-router-dom'; 




export default function ISSUE(){
    const [showColumn1, setShowColumn1] = useState(true);
    const [showColumn2, setShowColumn2] = useState(false);
    const [showColumn3, setShowColumn3] = useState(false);
    const [showColumn4, setShowColumn4] = useState(false);

    const [showButton, setShowButton] = useState(false); 

    const toggleColumns = () => {
        setShowColumn1(false);
        setShowColumn2(false);
        setShowColumn3(true);
        setShowColumn4(false);

        setShowButton(true); 
    };

    const toggleColumns1 = () => {
        setShowColumn1(false);
        setShowColumn2(true);
        setShowColumn3(false);
        setShowColumn4(false);

        setShowButton(true); 
    };

    const toggleColumns2 = () => {
        setShowColumn1(false);
        setShowColumn2(false);
        setShowColumn3(false);
        setShowColumn4(true);

        setShowButton(true); 
    };

    const handleReturn = () => {
        setShowColumn1(true);
        setShowColumn2(false);
        setShowButton(false); 
    };


    return(
        <body className='HR-Dashboard'>
        <Headers />

        <main>
        <div className='HRManager-Dashboard'>

        <div className='HR-Column1'>
        {showColumn1 && (
                    <div className='HR-Column1'>
                        <div className='R1' onClick={toggleColumns}>
                        <img src={payroll} alt="Payroll" />
                            <h1>Employee Salary ISSUE </h1>
                        </div>
                        <div className='R2' onClick={toggleColumns1}>
                        <img src={payroll} alt="Payroll" />
                            <h1>Product Payment ISSUE</h1>
                        </div>
                        <div className='R3' onClick={toggleColumns2}>
                        <img src={payroll} alt="Payroll" />
                            <h1 >Service Payment ISSUE</h1>
                        </div>
                    </div>
        )}
                    {showColumn2 && (
                    <div className='HR-Column2'>
                        <div className='R4'>
                            <Link to='/View_Product_Issue'>
                                <img src={Stock_Payment} alt="Stock_Payment" />
                                <h1>Product Payment Update ISSUE</h1>
                            </Link>
                        </div>
                        <div className='R5'>
                        <Link to='/View_Product_Delete_Issue'>
                            <img src={Stock_Payment} alt="Stock_Payment" />
                            <h1>Product Payment Delete ISSUE</h1>
                            </Link>
                        </div>
                    </div>
                )}

                {showColumn3 && (
                    <div className='HR-Column2'>
                        <div className='R4'>
                            <Link to='/view_salary_Issue'>
                                <img src={Stock_Payment} alt="Stock_Payment" />
                                <h1>Employee Payment Update ISSUE</h1>
                            </Link>
                        </div>
                        <div className='R5'>
                        <Link to='/View_salary_Delete_Issue'>
                            <img src={Stock_Payment} alt="Stock_Payment" />
                            <h1>Employee Payment Delete ISSUE</h1>
                            </Link>
                        </div>
                    </div>
                )}
                 {showColumn4 && (
                    <div className='HR-Column2'>
                        <div className='R4'>
                            <Link to='/View_Service_Issue'>
                                <img src={Stock_Payment} alt="Stock_Payment" />
                                <h1>Service Payment Update ISSUE</h1>
                            </Link>
                        </div>
                        <div className='R5'>
                        <Link to='/View_Service_Delete_Issue'>
                            <img src={Stock_Payment} alt="Stock_Payment" />
                            <h1>Service Payment Delete ISSUE</h1>
                            </Link>
                        </div>
                    </div>
                )}
        </div>

        <Link to="/Manager_Dashboard">
        <button style={{marginBottom:"15vh"}} type='button' id='HRReturn'>Return</button>
        </Link>

        </div>
        </main>
        </body>
    )
}