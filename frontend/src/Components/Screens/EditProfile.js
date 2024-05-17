import React, { useState, useEffect } from 'react';
import Headers from '../Staffheader';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

export default function Update_Profile() {

    const location = useLocation();
    const [email, setemail] = useState(location.state?.email || '');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [password, setpassword] = useState('');
    const [tel, settel] = useState('');
    const [details, setdetails] = useState('');

    useEffect(() => {
        // Fetch user details based on the provided email
        axios.get(`http://localhost:8000/Customer/get/${email}`)
            .then((res) => {
                const userData = res.data;
                setfirstName(userData.firstName);
                setlastName(userData.lastName);
                setaddress(userData.address);
                setcity(userData.city);
                setpassword(userData.password);
                settel(userData.tel);
                setdetails(userData.details);
            })
            .catch((err) => {
                console.error(err);
                alert("Error fetching user details");
            });
    }, [email]);

    function sendData(e) {
        e.preventDefault();

        const updatecustomer = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            tel: tel,
            email: email,
            address: address,
            city: city,
            details: details
        };

        axios.put(`http://localhost:8000/Customer/update/${email}`, updatecustomer)
            .then(() => {
                alert("Customer Updated Successfully");
            })
            .catch((err) => {
                console.error(err);
                alert("Error updating Customer");
            });
    }

    return (
        <body>
            <Headers />
            <main>
                <h1 className="savih1">Customer (update)</h1>
                <div className="Slary_payment_container">
                    <form onSubmit={sendData}>
                        <div className="Prow1">
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
                            <input
                                type="text"
                                placeholder="tel"
                                className="Product_ID"
                                value={tel}
                                onChange={(e) => settel(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">


                        </div>
                        <div className="Prow3">
                            <input
                                type="text"
                                placeholder="email"
                                className="Stock_Count"
                                value={email}
                                disabled
                            />
                            <input
                                type="text"
                                placeholder="address"
                                className="Description"
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="password"
                                className="Description"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                        <div className="Prow5" >


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
                        <button id="Pbtn1" type="submit">UPDATE</button>
                    </form>
                    <Link to='/Home'>
                        <button id="Pbtn2">Return</button>
                    </Link>
                </div>
            </main>
        </body>
    )
}
