

import React, { useState, useEffect } from 'react';
import Headers from '../Staffheader';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

export default function Update_Employee() {

    const location = useLocation();
    const [id, setid] = useState(location.state?.id || '');
    const [RID, setRID] = useState(location.state?.RID || '');
    const [firstName, setfirstName] = useState(location.state?.firstName || '');
    const [lastName, setlastName] = useState(location.state?.lastName || '');
    const [address, setaddress] = useState(location.state?.address || '');
    const [city, setcity] = useState(location.state?.city || '');
    const [NIC, setNIC] = useState(location.state?.NIC || '');
    const [tel, settel] = useState(location.state?.tel || '');
    const [employee_type, setemployee_type] = useState(location.state?.employee_type || '');
    const [basicsal, setbasicsal] = useState(location.state?.basicsal || '');
    const [email, setemail] = useState(location.state?.email || '');
    const [details, setdetails] = useState(location.state?.details || '');

    // Validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^\d{10}$/;

    // Validation functions
    const isValidEmail = (email) => emailRegex.test(email);
    const isValidTel = (tel) => telRegex.test(tel);

    function sendData(e) {
        e.preventDefault();

        // Validation checks
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidTel(tel)) {
            alert("Please enter a valid telephone number.");
            return;
        }

        const updateemployee = {
            _id: id,
            RID: RID,
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            NIC: NIC,
            address: address,
            city: city,
            employee_type: employee_type,
            basicsal: basicsal,
            email: email,
            details: details,
        };

        axios.put(`http://localhost:5001/Employee/update/${id}`, updateemployee)
            .then(() => {
                alert("Employee Updated Successfully");
            })
            .catch((err) => {
                console.error(err);
                alert("Error updating Employee");
            });
    }

    return (
        <body>
            <Headers />
            <main>
                <h1 className="savih1">Employee(update)</h1>
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
                                className="Company_Name"
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="lastName"
                                className="Product_Name"
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">
                            <input
                                type="text"
                                placeholder="tel"
                                className="Product_ID"
                                value={tel}
                                onChange={(e) => settel(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="email"
                                className="Stock_Count"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="address"
                                className="Description"
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">
                            <input
                                type="text"
                                placeholder="NIC"
                                className="Description"
                                value={NIC}
                                onChange={(e) => setNIC(e.target.value)}
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
                            <select id="vehicletype" value={employee_type} onChange={(e) => setemployee_type(e.target.value)}>
                                <option value="Manager">Manager</option>
                                <option value="Cashier">Cashier</option>
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
                        <button id="Pbtn1">UPDATE</button>
                    </form>
                    <Link to='/Employee'>
                        <button type="submit" id="Pbtn2">Return</button>
                    </Link>
                </div>
            </main>
        </body>
    )
}
