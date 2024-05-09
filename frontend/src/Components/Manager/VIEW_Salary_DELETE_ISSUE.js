import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import UpdateSalary from "../More_View_Salary_payment";
import Headers from "../Staffheader";
import "../CSS/View_Salary_payment.css";

export default function View_salary_Delete_Issue() {

    const [salary, setsalary] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchpayments();
    }, []);

    const fetchpayments = () => {
        axios.get(`http://localhost:5001/Salary_Delete_ISSUE/`)
            .then((res) => {
                console.log(res.data);
                setsalary(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleDelete = (ID, id) => {
        axios.delete(`http://localhost:5001/Salary/delete/${ID}`)
            .then((res) => {
                alert("Successfully deleted employee salary Payment"); // Fixed: Corrected alert message
                setsalary(prevSalaries => prevSalaries.filter(salary => salary._id !== id));
                axios.delete(`http://localhost:5001/Salary_Delete_ISSUE/delete/${id}`)
                    .then((res) => {
                        alert("Successfully deleted employee salary Payment ISSUE"); // Fixed: Corrected alert message
                        setsalary(prevSalaries => prevSalaries.filter(salary => salary._id !== id));
                        window.location.href = '/View_salary_Delete_Issue'; // Redirect to View_salary_Issue page


                    })
                    .catch((err) => {
                        alert(err.message);
                    });
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const rowdelete = (id) => {
        axios.delete(`http://localhost:5001/Salary_Delete_ISSUE/delete/${id}`)
            .then((res) => {
                alert("Successfully deleted employee salary Payment ISSUE"); // Fixed: Corrected alert message
                setsalary(prevSalaries => prevSalaries.filter(salary => salary._id !== id));
                window.location.href = '/View_salary_Delete_Issue'; // Redirect to View_salary_Issue page


            })
            .catch((err) => {
                alert(err.message);
            });

    }

    return (
        <div>
            <Headers />
            <main>
                <div className="mainrow">
                    <input type="text" placeholder="Enter the ID" className="Searchbox"></input>
                    <h1 style={{ marginBottom: "1rem" }}>Employee Salary DELETE ISSUE</h1>
                    <button type="submit" id="VSPReturn">Return</button>
                </div>
                <div className="VSrow1">
                    <h4>RID</h4>
                    <h4>First_Name</h4>
                    <h4>Last_Name</h4>
                    <h4>Issue</h4>
                    <h4>Action 1</h4>
                    <h4>Action 2</h4>

                </div>
                {salary.map((salary) => {
                    const id = salary._id;
                    const ID = salary.ID;
                    const RID = salary.RID;
                    const First_Name = salary.First_Name;
                    const Last_Name = salary.Last_Name;
                    const Issue = salary.Issue;


                    return (
                        <div key={salary._id} className="VSrow2">
                            <h4>{salary.RID}</h4>
                            <h4>{salary.First_Name}</h4>
                            <h4>{salary.Last_Name}</h4>
                            <h4>{salary.Issue}</h4>

                            <button id="Vupdate" type="button" onClick={() => handleDelete(salary.ID, salary._id)}>Confirm</button>
                            <button id="Vupdate" type="button" onClick={() => rowdelete(salary._id)}>Reject</button>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}
