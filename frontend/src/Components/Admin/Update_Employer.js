
import React, { useState, useEffect } from 'react';
import Headers from '../Staffheader';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

export default function Update_Employer() {

    const location = useLocation();
    const [id, setid] = useState(location.state?.id || '');
    const [Employer_ID, setEmployer_ID] = useState(location.state?.Employer_ID || '');
    const [Password, setPassword] = useState(location.state?.Password || '');
    const [Position, setPosition] = useState(location.state?.Position || '');
    const [Email, setEmail] = useState(location.state?.Email || '');

    useEffect(() => {
        if (location.state && location.state.id) {
            setEmployer_ID(location.state.Employer_ID);/////////////////////////////////
        }
    }, [location.state]);

    // Validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation function
    const isValidEmail = (email) => emailRegex.test(email);

    function sendData(e) {
        e.preventDefault();

        // Validation check for email
        if (!isValidEmail(Email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const updateemployer = {
            _id: id,
            Employer_ID: Employer_ID,
            Password: Password,
            Position: Position,
            Email: Email,
        };

        axios.put(`http://localhost:5001/Employer/update/${id}`, updateemployer)
            .then(() => {
                alert("Employer Updated Successfully");
            })
            .catch((err) => {
                console.error(err);
                alert("Error updating Employer");
            });
    }

    return (
        <body>
            <Headers />
            <main>
                <h1 className="savih1">Employer(update)</h1>
                <div className="Slary_payment_container">
                    <form onSubmit={sendData}>
                        <div className="Prow1">
                            <input
                                type="text"
                                placeholder="Employer_ID"
                                className="Company_ID"
                                value={Employer_ID}
                                onChange={(e) => setEmployer_ID(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Password"
                                className="Company_Name"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">
                            <select id="vehicletype" value={Position} onChange={(e) => setPosition(e.target.value)}>
                                <option value="-">-</option>
                                <option value="Manager">Manager</option>
                                <option value="Cashier">Cashier</option>
                                <option value="HR">HR Manager</option>

                                <option value="Operational">Operational manager</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Email"
                                className="Product_ID"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button id="Pbtn1">UPDATE</button>
                    </form>
                    <Link to='/Employer'>
                        <button type="submit" id="Pbtn2">Return</button>
                    </Link>
                </div>
            </main>
        </body>
    )
}
