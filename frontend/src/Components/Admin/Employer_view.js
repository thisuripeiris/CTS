

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Headers from "../Staffheader";
import "../CSS/View_Salary_payment.css";

export default function Employer() {
    const [employers, setEmployers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation();

    useEffect(() => {
        fetchEmployers();
    }, []);

    const fetchEmployers = () => {
        axios.get(`http://localhost:5001/Employer/`)
            .then((res) => {
                console.log(res.data);
                setEmployers(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/Employer/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                setEmployers(prevEmployers => prevEmployers.filter(employer => employer._id !== id));
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredEmployers = employers.filter((employer) =>
        employer.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employer.Employer_ID.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Headers />
            <main>
                <div className="mainrow">
                    <input
                        type="text"
                        placeholder="Search by Email or ID"
                        className="Searchbox"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <h1 style={{ marginBottom: "1rem" }}>Employers</h1>
                    <Link to='/AddEmployer'>
                        <button type="submit" id="VSPReturn">Add Employer</button>
                    </Link>
                    <Link to='/Admin_Dashboard'>
                        <button type="submit" id="VSPReturn">Return</button>
                    </Link>
                </div>
                <div className="VSrow1">
                    <h4>Employer ID</h4>
                    <h4>Password</h4>
                    <h4>Position</h4>
                    <h4>Email</h4>
                    <h4>Action 1</h4>
                    <h4>Action 2</h4>
                </div>
                {filteredEmployers.map((employer) => {
                    const ID = employer._id;
                    const Employer_ID = employer.Employer_ID;
                    const Password = employer.Password;
                    const Position = employer.Position;
                    const Email = employer.Email;

                    return (
                        <div key={employer._id} className="VSrow2">
                            <h4>{employer.Employer_ID}</h4>
                            <h4>{employer.Password}</h4>
                            <h4>{employer.Position}</h4>
                            <h4>{employer.Email}</h4>

                            <Link to="/Update_Employer" state={{ id: ID, Employer_ID: Employer_ID, Password: Password, Position: Position, Email: Email }}>
                                <button id="Vupdate" type="button">Update</button>
                            </Link>
                            <button id="Vdelete" onClick={() => handleDelete(employer._id)}>Delete</button>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}
