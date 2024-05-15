import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import Payment from "../Screens/Payment";

export default function ProfileView() {
    const location = useLocation();
    const { id, email } = location.state || {};

    const [profiles, setProfiles] = useState([]);
    const [ID, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const [details, setDetails] = useState('');

    useEffect(() => {
        async function getProfiles() {
            try {
                const res = await axios.get(`http://localhost:5001/Customer/get?email=${email}`);
                console.log("Response:", res.data);

                if (res.data.status === "Customer fetch") {
                    const profileData = res.data.data;
                    setProfiles([profileData]);
                    setFirstName(profileData.firstName);
                    setLastName(profileData.lastName);
                    setAddress(profileData.address);
                    setCity(profileData.city);
                    setPassword(profileData.password);
                    setTel(profileData.tel);
                    setDetails(profileData.details);
                    setId(profileData._id);
                } else {
                    console.error("Request failed with message:", res.data.message);
                }
            } catch (err) {
                console.error("Request failed with error:", err.message);
            }
        }
        getProfiles();
    }, [email]);

    function sendData(e) {
        e.preventDefault();

        const updatedcus = {
            _id: ID,
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            details: details,
            address: address,
            email: email,
            city: city,
            password: password

        };

        axios.put(`http://localhost:5001/Customer/update/${ID}`, updatedcus)
            .then(() => {
                alert("Profile Updated");
            })
            .catch((err) => {
                console.error(err);
                alert("Error updating profile");
            });
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:5001/Customer/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                setProfiles([]);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <div style={{ overflowX: "hidden" }}>
            {profiles.map((profile1) => (
                <div className="Createcontainer" key={profile1._id}>
                    <h1 style={{ marginTop: "0" }}>Profile Details</h1>
                    <form>
                        <div className="main">
                            <div className="row">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    id="First_Name"
                                    value={profile1.firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                ></input>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    id="Last_Name"
                                    value={profile1.lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                ></input>
                            </div>
                            <div className="row">
                                <input
                                    type="text"
                                    placeholder="Address"
                                    id="Address"
                                    value={profile1.address}
                                    onChange={(e) => setAddress(e.target.value)}
                                ></input>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    id="Phone"
                                    value={profile1.tel}
                                    onChange={(e) => setTel(e.target.value)}
                                ></input>
                            </div>
                            <div className="row">
                                <input
                                    type="text"
                                    placeholder="details"
                                    id="Passport"
                                    value={profile1.details}
                                    onChange={(e) => setDetails(e.target.value)}
                                ></input>
                            </div>
                            <div className="row">
                                <input
                                    type="text"
                                    placeholder="Password"
                                    id="Password"
                                    value={profile1.password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                <input
                                    type="text"
                                    placeholder="city"
                                    id="Age"
                                    value={profile1.city}
                                    onChange={(e) => setCity(e.target.value)}
                                ></input>
                                <input style={{ display: "none" }}
                                    type="text"
                                    placeholder="First Name"
                                    id="First_Name"
                                    value={profile1._id}
                                    onChange={(e) => setId(e.target.value)}
                                ></input>
                            </div>
                            <button type="submit" className="btn" id="btn" onClick={sendData}>
                                Update
                            </button>
                        </div>
                    </form>
                    <Link to="/Home">
                        <button type="button" className="btn1" id="btn1">
                            Return
                        </button>
                    </Link>
                    <button style={{ marginLeft: "auto", marginRight: "auto", paddingTop: "0.3rem", paddingBottom: "0.3rem", color: "red", fontSize: "1.5rem", cursor: "pointer" }} id="Vdelete" onClick={() => handleDelete(profile1._id)}>Delete</button>
                </div>
            ))}
            <Payment customerDetails={profiles[0]} /> {/* Display Payment component */}
        </div>
    );
}
