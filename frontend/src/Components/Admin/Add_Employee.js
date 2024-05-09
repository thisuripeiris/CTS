

import "../CSS/Product_Payment.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Headers from "../Staffheader";

export default function Add_Employee() {
    const [RID, setRID] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [NIC, setNIC] = useState("");
    const [email, setemail] = useState("");
    const [employee_type, setemployee_type] = useState("");
    const [tel, settel] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [basicsal, setbasicsal] = useState("");
    const [details, setdetails] = useState("");

    // Function to validate email
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Function to validate telephone number
    const validateTel = (tel) => {
        const re = /^[0-9]{10}$/;
        return re.test(String(tel));
    };

    function sendData(e) {
        e.preventDefault();

        // Validating email and telephone number
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validateTel(tel)) {
            alert("Please enter a valid telephone number (10 digits).");
            return;
        }

        const newemployee = {
            RID: RID,
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            NIC: NIC,
            email: email,
            address: address,
            employee_type: employee_type,
            city: city,
            basicsal: basicsal,
            details: details
        };

        axios
            .post("http://localhost:5001/Employee/Add", newemployee)
            .then(() => {
                alert("Employee Added");
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <body>
            <Headers />
            <main>
                <h1 className="savih1">Add Employee </h1>
                <div className="Slary_payment_container">
                    <form onSubmit={sendData}>
                        <div className="Prow1">
                            <input
                                type="text"
                                placeholder="RID"
                                className="Company_ID"
                                value={RID}
                                onChange={(e) => setRID(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="firstName"
                                className="Company_ID"
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="lastName"
                                className="Company_Name"
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">
                            <input
                                type="text"
                                placeholder="tel"
                                className="Product_Name"
                                value={tel}
                                onChange={(e) => settel(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="email"
                                className="Product_ID"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="NIC"
                                className="Description"
                                value={NIC}
                                onChange={(e) => setNIC(e.target.value)}
                            />
                        </div>

                        <div className="Prow2">
                            <input
                                type="text"
                                placeholder="address"
                                className="Description"
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="city"
                                className="Description"
                                value={city}
                                onChange={(e) => setcity(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="details"
                                className="Description"
                                value={details}
                                onChange={(e) => setdetails(e.target.value)}
                            />
                        </div>
                        <div className="Prow2 vehicletype">
                            <label>Employee Type</label>
                            <select
                                id="vehicletype"
                                value={employee_type}
                                onChange={(e) => setemployee_type(e.target.value)}
                            >
                                <option value="-">-</option>
                                <option value="Manager">Manager</option>
                                <option value="admin">Admin</option>
                                <option value="Cahsier">Cashier</option>
                                <option value="HR">HR Manager</option>
                                <option value="Tire_fitter">Tire fitter</option>
                                <option value="Operational">Operational manager</option>
                            </select>
                        </div>
                        <div className="Prow2">
                            <input
                                type="text"
                                placeholder="basicsal"
                                className="Description"
                                value={basicsal}
                                onChange={(e) => setbasicsal(e.target.value)}
                            />
                        </div>
                        <button id="Pbtn1">ADD</button>
                    </form>
                    <Link to="/Employee">
                        <button type="submit" id="Pbtn2">
                            Return
                        </button>
                    </Link>
                </div>
            </main>
        </body>
    );
}
