import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProfileView() {
    const location = useLocation();
    const { id, email } = location.state || {};

    const [profile, setProfile] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        tel: '',
        password: ''
    });

    useEffect(() => {
        async function getProfile() {
            try {
                const res = await axios.get(`http://localhost:8000/Customer/get/${email}`);
                if (res.data.status === "Customer fetch") {
                    const profileData = res.data.data[0];
                    setProfile(profileData);
                } else {
                    console.error("Request failed with message:", res.data.message);
                }
            } catch (err) {
                console.error("Request failed with error:", err.message);
            }
        }
        getProfile();
    }, [email]);

    function sendData(e) {
        e.preventDefault();

        axios.put('http://localhost:8000/Customer/update/${profile._id}, profile')
            .then(() => {
                alert("Profile Updated");
            })
            .catch((err) => {
                console.error(err);
                alert("Error updating profile");
            });
    }

    function handleDelete() {
        axios.delete('http://localhost:8000/Customer/delete/${profile._id}')
            .then((res) => {
                console.log(res.data);
                setProfile({
                    _id: '',
                    firstName: '',
                    lastName: '',
                    address: '',
                    city: '',
                    tel: '',
                    password: ''
                });
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Profile Details</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={sendData}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                value={profile.firstName}
                                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                value={profile.lastName}
                                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                value={profile.address}
                                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                                value={profile.tel}
                                onChange={(e) => setProfile({ ...profile, tel: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                value={profile.city}
                                onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Password"
                                value={profile.password}
                                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary me-2">Update</button>
                        <button type="button" className="btn btn-secondary" onClick={handleDelete}>Delete</button>
                    </form>
                </div>
            </div>
            {/* <Link to="/Home" className="btn btn-info mt-3">Return</Link> */}

        </div>
    );
}