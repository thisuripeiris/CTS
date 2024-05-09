

import React, { useState } from "react";
import axios from "axios";
import Headers from "../Staffheader";
import { Link } from "react-router-dom";

export default function Add_Employer() {
    const [Employer_ID, setEmployer_ID] = useState("");
    const [Password, setPassword] = useState("");
    const [Position, setPosition] = useState("");
    const [Email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    function validateEmail(email) {
        // Email regex pattern
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function sendData(e) {
        e.preventDefault();
        const newemployer = {
            Employer_ID: Employer_ID,
            Password: Password,
            Position: Position,
            Email: Email,
        };

        // Validation
        const errors = {};

        if (!validateEmail(Email)) {
            errors.email = "Invalid email address";
        }

        if (Object.keys(errors).length === 0) {
            axios
                .post("http://localhost:5001/Employer/Add", newemployer)
                .then(() => {
                    alert("Employer Added");
                })
                .catch((err) => {
                    alert(err);
                });
        } else {
            setErrors(errors);
        }
    }

    return (
        <body>
            <Headers />
            <main>
                <h1 className="savih1">Add Employer-User roles </h1>
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
                                placeholder="Email"
                                className="Company_ID"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                            <input
                                type="text"
                                placeholder="Password"
                                className="Company_Name"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">
                            <select
                                id="vehicletype"
                                value={Position}
                                onChange={(e) => setPosition(e.target.value)}
                            >

                                <option value="Manager">Manager</option>
                                <option value="Cashier">Cashier</option>
                                <option value="HR Manager">HR Manager</option>
                                <option value="admin">Admin</option>

                                <option value="Operational manager">Operational manager</option>
                            </select>
                        </div>
                        <button id="Pbtn1">ADD</button>
                    </form>
                    <Link to="/Employer">
                        <button type="submit" id="Pbtn2">
                            Return
                        </button>
                    </Link>
                </div>
            </main>
        </body>
    );
}
