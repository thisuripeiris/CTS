import React, { useState } from 'react';
import Headers from "./Staffheader";
import Attendence from './Images/Attendence.png';
import assignment from './Images/assignment.png';
import payroll from './Images/payroll.png';
import "./CSS/HR-Dashboard.css"
import { Link } from 'react-router-dom'; // Import Link

export default function HRDashboard() { 
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

    return (
        <body className='HR-Dashboard'>
            <Headers />
            <main>
                <div className='HRManager-Dashboard'>
                    {showColumn1 && (
                        <div className='HR-Column1'>
                            <div className='R1'>
                                <img src={Attendence} alt="Attendance" />
                                <h1>Attendance</h1>
                            </div>
                            <div className='R2'>
                                <img src={assignment} alt="Assignment" />
                                <h1>Salary Calculator</h1>
                            </div>
                            <div className='R3' onClick={toggleColumns}>
                                <img src={payroll} alt="Payroll" />
                                <h1 >Salary Payment</h1>
                            </div>
                        </div>
                    )}
                    {showColumn2 && (
                        <div className='HR-Column2'>
                            <div className='R4'>
                                <Link to='/Employee_Salary_Payment'>
                                    <img src={payroll} alt="Payroll" />
                                    <h1>Add Salary Payment</h1>
                                </Link>
                            </div>
                            <div className='R5'>
                            <Link to='/VeiwSalary'>
                                <img src={payroll} alt="Payroll" />
                                <h1>View Salary Payment</h1>
                                </Link>
                            </div>
                        </div>
                    )}
                    {showButton && <button type='button' id='HRReturn' onClick={handleReturn}>Return</button>}
                </div>
            </main>
        </body>
    );
}
