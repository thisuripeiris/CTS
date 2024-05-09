import React, { useState } from 'react';
import Headers from "../Staffheader";
import Attendence from '../Images/Attendence.png';
import Stock_Payment from '../Images/Stock_Payment.png';
import payroll from '../Images/payroll.png';
import logo from '../Images/humanM.png';
import "../CSS/HR-Dashboard.css"
import hum from '../Images/hum.png';
import { Link } from 'react-router-dom'; // Import Link



export default function Manager_Dashboard(){

    
    const [showColumn1, setShowColumn1] = useState(true);
    const [showColumn2, setShowColumn2] = useState(false);
    const [showButton, setShowButton] = useState(false); // State to track button visibility

    const toggleColumns = () => {
        setShowColumn1(!showColumn1);
        setShowColumn2(!showColumn2);
        setShowButton(true); // Show button after R3 click
    };

    const handleReturn = () => {
        setShowColumn1(true);
        setShowColumn2(false);
        setShowButton(false); // Hide button on return
    };



    return(
        <body className='HR-Dashboard'>
        <Headers />
        <main>
            <div className='HRManager-Dashboard'>
                {showColumn1 && (
                    <div className='HR-Column1'>
                        <div className='R1'>
                            <img src={Attendence} alt="Attendance" />
                            <h1>Stock</h1>
                        </div>
                        <div className='R2' onClick={toggleColumns}>
                            <img src={Stock_Payment} alt="Stock_Payment" />
                            <h1>Stock Payment</h1>
                        </div>
                        <div className='R4'  >
                        <Link to='/ViewSuppliers'>
                            <img src={hum} alt="Payroll" />
                            <h1 >Supplier Management</h1>
                        </Link> 
                        </div>
                        <div className='R3' >
                        <Link to='/ISSUE'>
                            <img src={payroll} alt="Payroll" />
                            <h1>ISSUE</h1>
                            </Link>
                        </div>

                    </div>
                )}
                {showColumn2 && (
                    <div className='HR-Column2'>
                        <div className='R4'>
                            <Link to='/Stock_Payment'>
                                <img src={Stock_Payment} alt="Stock_Payment" />
                                <h1>Add Stock Payment</h1>
                            </Link>
                        </div>
                        <div className='R5'>
                        <Link to='/ViewSalaryPayment'>
                            <img src={Stock_Payment} alt="Stock_Payment" />
                            <h1>View Stock Payment</h1>
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