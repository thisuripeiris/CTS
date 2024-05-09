import React, { useState, useEffect } from 'react';
import Headers from '../Staffheader';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

export default function MORE_VIEW_SLARY_ISSUE() {
    const location = useLocation();
    const [id, setid] = useState(location.state?.id || '');
    const [ID, setId] = useState(location.state?.ID || '');
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
    const [Issue, setISSUE] = useState(location.state?.Issue || '');


    useEffect(() => {
        if (location.state && location.state.RID) {
            setRID(location.state.RID);
        }

    }, [location.state]);

    function sendData(e) {
        e.preventDefault();

        const updatesalary = {
            _id: ID,
            RID: RID,
            First_Name: First_Name,
            Last_Name: Last_Name,
            Phone: Phone,
            Email: Email,
            Amount: Amount,
            Payment_Type: Payment_Type,
            Payment_Month: Payment_Month,
            Payment_Day: Payment_Date,
            Date: Date

        };

        axios.put(`http://localhost:5001/Salary/update/${ID}`, updatesalary) // Fix: Use put method and lowercase update
            .then(() => {
                alert("Update the Salary Payment");
                axios.delete(`http://localhost:5001/Salary_ISSUE/delete/${id}`, updatesalary) // Fix: Use put method and lowercase update
                    .then(() => {
                        alert("Successfull Delete Employee Salary ISSUE");
                        window.location.href = '/View_salary_Issue'; // Redirect to View_salary_Issue page
                    })
                    .catch((err) => {
                        console.error(err); // Fix: Change alert to console.error for better debugging
                        alert("Error Deleting"); // Fix: Change alert message
                    });
            })
            .catch((err) => {
                console.error(err); // Fix: Change alert to console.error for better debugging
                alert("Error updating Salary"); // Fix: Change alert message
            });


    }

    const handleDelete = () => {
        console.log("My Employee ID is " + id);
        axios.delete(`http://localhost:5001/Salary_ISSUE/delete/${id}`) // Fixed: Use put method and lowercase update
            .then(() => {
                alert("Successfully deleted employee salary issue"); // Fixed: Corrected alert message
                window.location.href = '/View_salary_Issue'; // Redirect to View_salary_Issue page
            })
            .catch((err) => {
                console.error(err); // Fixed: Changed alert to console.error for better debugging
                alert("Error deleting"); // Fixed: Changed alert message
            });
    };


    return (
        <>
            <Headers />
            <main>
                <h1 className="savih1">ISSUE Employee Salary Payment UPDATE</h1>
                <div className="Slary_payment_container">
                    <form>
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
                                    <option value="none">none</option>
                                    <option value="Monthly">Monthly Payment</option>
                                    <option value="Daily">Daily Payment</option>
                                </select>
                            </div>
                            <div className="ppaiddate" style={{ display: "flex", flexDirection: "column", justifyContent: "left" }}>
                                <label style={{ marginRight: "80%" }}>Date</label>
                                <input
                                    type="date"
                                    className="Date"
                                    value={Date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="Prow3" style={{ flexDirection: "column" }}>
                            {Payment_Type === "Monthly" && (
                                <input
                                    type="month"
                                    placeholder="Payment_Month"
                                    className="Payment_Month"
                                    value={Payment_Month}
                                    onChange={(e) => setPayment_Month(e.target.value)}
                                    style={{ marginLeft: "0" }}

                                />
                            )}
                            {Payment_Type === "Daily" && (
                                <input
                                    type="date"
                                    placeholder="Payment_Date"
                                    className="Payment_Date"
                                    value={Payment_Date}
                                    onChange={(e) => setPayment_Date(e.target.value)}
                                    style={{ marginRight: "5vw" }}
                                />
                            )}
                            <input
                                type="text"
                                placeholder="Issue"
                                className="Last_Name"
                                value={Issue}
                                onChange={(e) => setISSUE(e.target.value)}
                                style={{ marginLeft: "0", height: "10vh", width: "40vw", marginTop: "5vh" }}

                            />
                        </div>

                        <div className='Prow3'>
                            <button
                                type="button"
                                id="Pbtn1"
                                onClick={(e) => sendData(e)}

                            >
                                Confirm
                            </button>
                            <button onClick={handleDelete} // Added parentheses to call handleDelete function
                                type="button"
                                id="Pbtn2"
                            >
                                Reject
                            </button>
                        </div>

                    </form>

                    <Link to="/View_salary_Issue">
                        <button id='Pbtn2'>Return</button>
                    </Link>
                </div>
            </main>
        </>
    );
}
