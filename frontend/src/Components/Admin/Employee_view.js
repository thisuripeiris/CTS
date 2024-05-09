
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Headers from "../Staffheader";
import "../CSS/View_Salary_payment.css";

export default function Employee() {
    const [employees, setEmployees] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        axios.get(`http://localhost:5001/Employee/`)
            .then((res) => {
                console.log(res.data);
                setEmployees(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/Employee/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== id));
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredEmployees = employees.filter((employee) =>
        employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.RID.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Headers />
            <main>
                <div className="mainrow">
                    <input
                        type="text"
                        placeholder="Search by Email or RID"
                        className="Searchbox"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <h1 style={{ marginBottom: "1rem" }}>Employees</h1>
                    <Link to='/AddEmployee'>
                        <button type="submit" id="VSPReturn">Add Employee</button>
                    </Link>
                    <Link to='/Admin_Dashboard'>
                        <button type="submit" id="VSPReturn">Return</button>
                    </Link>
                </div>
                <div className="VSrow1">
                    <h4>RID</h4>
                    <h4>First Name</h4>
                    <h4>Last Name</h4>
                    <h4>email</h4>
                    <h4>Phone</h4>

                    <h4>Action 1</h4>
                    <h4>Action 2</h4>
                </div>
                {filteredEmployees.map((employee) => {
                    const ID = employee._id;
                    const RID = employee.RID;
                    const firstName = employee.firstName;
                    const lastName = employee.lastName;
                    const tel = employee.tel;
                    const email = employee.email;

                    return (
                        <div key={employee._id} className="VSrow2">
                            <h4>{employee.RID}</h4>
                            <h4>{employee.firstName}</h4>
                            <h4>{employee.lastName}</h4>
                            <h4>{employee.email}</h4>
                            <h4>{employee.tel}</h4>

                            <Link to="/Update_Employee" state={{ id: ID, RID: RID, firstName: firstName, lastName: lastName, tel: tel, email: email }}>
                                <button id="Vupdate" type="button">Update</button>
                            </Link>
                            <button id="Vdelete" onClick={() => handleDelete(employee._id)}>Delete</button>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}
