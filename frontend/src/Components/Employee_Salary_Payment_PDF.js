import React, { useState, useEffect } from 'react';
import Headers from './Staffheader';
import { Link, useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';


export default function More_Payment() {
    const location = useLocation();
    const [id, setId] = useState(location.state?.id || '');
    const [RID, setRID] = useState(location.state?.RID || '');
    const [First_Name, setFirst_Name] = useState(location.state?.First_Name || '');
    const [Last_Name, setLast_Name] = useState(location.state?.Last_Name || '');
    const [Phone, setPhone] = useState(location.state?.Phone || '');
    const [Amount, setAmount] = useState(location.state?.Amount || '');
    const [Date, setDate] = useState(location.state?.Date || '');
    const [Email, setEmail] = useState(location.state?.Email || '');
    const [Payment_Type, setPayment_Type] = useState(location.state?.Payment_Type || '');
    const [Payment_Month, setPayment_Month] = useState(location.state?.Payment_Month || '');
    const [Payment_Date, setPayment_Date] = useState(location.state?.Payment_Date || '');

/*
    const generatePDF = () => {
        const pdf = new jsPDF();
        const fontSizeHeading = 20; // Adjust the font size for the heading
        const fontSizeNormal = 12; // Font size for normal text
    
        pdf.setFontSize(fontSizeHeading); // Set font size for heading
        pdf.setTextColor(255, 0, 0); // Set text color to red
        pdf.text("Employee Salary Payment Details", pdf.internal.pageSize.getWidth() / 2, 15, { align: 'center' });
        pdf.setTextColor(0, 0, 0); // Reset text color to black
        pdf.setFontSize(fontSizeNormal); // Set font size back to normal
    
        pdf.text(`Employee ID: ${RID}`, 20, 30);
        pdf.text(`First Name: ${First_Name}`, 20, 40);
        pdf.text(`Last Name: ${Last_Name}`, 20, 50);
        pdf.text(`Phone: ${Phone}`, 20, 60);
        pdf.text(`Amount: ${Amount}`, 20, 70);
        pdf.text(`Date: ${Date}`, 20, 80);
        pdf.text(`Email: ${Email}`, 20, 90);
        pdf.text(`Payment_Type: ${Payment_Type}`, 20, 100);
        pdf.text(`Payment_Month: ${Payment_Month}`, 20, 110);
        pdf.text(`Payment_Date: ${Payment_Date}`, 20, 120);
    
        pdf.save("booking_details.pdf");
    };
    */
    const generatePDF = () => {
        const pdf = new jsPDF();
        const headingColor = [255, 0, 0]; // Black color for heading and static text
        const color = [191, 190, 190]; // Black color for heading and static text
        const variableColor = [148, 213, 216]; // Green color for variable text
        const fontSizeHeading = 25; // Font size for the heading
        const fontSizeNormal = 15; // Font size for normal text
    
        pdf.setFontSize(fontSizeHeading);
        pdf.setTextColor(...headingColor); // Set text color for the heading and static text
        pdf.text("Employee Salary Payment Details", pdf.internal.pageSize.getWidth() / 2, 15, { align: 'center' });
        pdf.setFontSize(fontSizeNormal);
    
        // Static text remains black
        pdf.setTextColor(...color);
        pdf.text("Employee ID     :", 20, 30);
        pdf.text("First Name      :", 20, 40);
        pdf.text("Last Name       :", 20, 50);
        pdf.text("Phone           :", 20, 60);
        pdf.text("Amount          :", 20, 70);
        pdf.text("Date            :", 20, 80);
        pdf.text("Email           :", 20, 90);
        pdf.text("Payment_Type    :", 20, 100);
        pdf.text("Payment_Month   :", 20, 110);
        pdf.text("Payment_Date    :", 20, 120);
    
        // Set text color for variable text to green
        pdf.setTextColor(...variableColor);
        pdf.text(`${RID}`, 80, 30); // Employee ID
        pdf.text(`${First_Name}`, 80, 40); // First Name
        pdf.text(`${Last_Name}`, 80, 50); // Last Name
        pdf.text(`${Phone}`, 80, 60); // Phone
        pdf.text(`${Amount}`, 80, 70); // Amount
        pdf.text(`${Date}`, 80, 80); // Date
        pdf.text(`${Email}`, 80, 90); // Email
        pdf.text(`${Payment_Type}`, 80, 100); // Payment Type
        pdf.text(`${Payment_Month}`, 80, 110); // Payment Month
        pdf.text(`${Payment_Date}`, 80, 120); 
    
        pdf.save("booking_details.pdf");
    };
    

    useEffect(() => {
        if (location.state && location.state.RID) {
            setRID(location.state.RID);
        }
    }, [location.state]);

    console.log("My Employee ID is " + RID);

    return (
        <>
            <Headers />
            <main >
                <h1 className="savih1">Employee Salary Payment PDF</h1>
                <div className="Slary_payment_container">
                    <form style={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
                        <div className="Prow1">
                            <input
                                type="text"
                                placeholder="Employee ID"
                                className="Employee_ID"
                                value={RID}
                                onChange={(e) => setRID(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="First Name"
                                className="First_Name"
                                value={First_Name}
                                onChange={(e) => setFirst_Name(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="Last_Name"
                                value={Last_Name}
                                onChange={(e) => setLast_Name(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="Phone"
                                value={Phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="Prow3">
                            <input
                                type="text"
                                placeholder="Email"
                                className="Email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Amount"
                                className="Amount"
                                value={Amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <div className="Prow4">
                            <div className="paymenttype">
                                <label>Payment Type</label>
                                <select
                                id="paymenttype"
                                value={Payment_Type}
                                onChange={(e) => setPayment_Type(e.target.value)}
                            >
                             <option>{Payment_Type}</option>

                            </select>


                            </div>
                            <div className="paiddate">
                                <label>Date</label>
                                <input
                                    type="date"
                                    placeholder="Date"
                                    className="Date"
                                    value={Date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="Prow5" id="Prow5">
                            <div className="Month" id="Month">
                                <label>Payment Month</label>
                                <input
                                    type="month"
                                    placeholder="Payment Month"
                                    className="Payment_Month"
                                    value={Payment_Month}
                                    onChange={(e) => setPayment_Month(e.target.value)}
                                />
                            </div>
                            <div className="paymentDate" id="paymentDate">
                                <label>Payment Date</label>
                                <input
                                    type="date"
                                    placeholder="Payment Date"
                                    className="Payment_Date"
                                    value={Payment_Date}
                                    onChange={(e) => setPayment_Date(e.target.value)}
                                />
                            </div>
                        </div>
                        <button id="Pbtn1" type="button" onClick={generatePDF} style={{width:"10rem", textAlign:"center",marginLeft:"auto", marginRight:"auto"}}>
                        PDF
                        </button>

                        <Link to="/VeiwSalary">
                            <button id='Pbtn2'>Return</button>
                        </Link>
                    </form>
                </div>
            </main>
        </>
    );
}
