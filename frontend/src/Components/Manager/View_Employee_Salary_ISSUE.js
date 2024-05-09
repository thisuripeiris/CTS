import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import UpdateSalary from "../More_View_Salary_payment";
import Headers from "../Staffheader";
import "../CSS/View_Salary_payment.css";

export default function View_salary_Issue() {

    const [salary, setsalary] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchpayments();
    }, []);

    const fetchpayments = () => {
        axios.get(`http://localhost:5001/Salary_ISSUE/`)
            .then((res) => {
                console.log(res.data);
                setsalary(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/Salary_ISSUE/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                setsalary(prevSalaries => prevSalaries.filter(salary => salary._id !== id));
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div>
            <Headers />
            <main>
                <div className="mainrow">
                    <input type="text" placeholder="Enter the ID" className="Searchbox"></input>
                    <h1 style={{ marginBottom: "1rem" }}>Employee Salary Update ISSUE</h1>
                    <button type="submit" id="VSPReturn">Return</button>
                </div>
                <div className="VSrow1">
                    <h4>RID</h4>
                    <h4>First_Name</h4>
                    <h4>Last_Name</h4>
                    <h4>Date</h4>
                    <h4>Issue</h4>
                    <h4>Action 1</h4>
                </div>
                {salary.map((salary) => {
                    const id = salary._id;
                    const ID = salary.ID;
                    const RID = salary.RID;
                    const First_Name = salary.First_Name;
                    const Last_Name = salary.Last_Name;
                    const Phone = salary.Phone;
                    const Email = salary.Email;
                    const Amount = salary.Amount;
                    const Payment_Type = salary.Payment_Type;
                    const Payment_Month = salary.Payment_Month;
                    const Payment_Day = salary.Payment_Day;
                    const Date = salary.Date;
                    const Issue = salary.Issue;


                    return (
                        <div key={salary._id} className="VSrow2">
                            <h4>{salary.RID}</h4>
                            <h4>{salary.First_Name}</h4>
                            <h4>{salary.Last_Name}</h4>
                            <h4>{salary.Date}</h4>
                            <h4>{salary.Issue}</h4>

                            <Link to="/MORE_VIEW_SLARY_ISSUE" state={{
                                id: id, ID: ID, RID: RID, First_Name: First_Name, Last_Name: Last_Name, Payment_Type: Payment_Type,
                                Date: Date, Email: Email, Amount: Amount, Payment_Month: Payment_Month, Payment_Date: Payment_Day, Phone: Phone, Issue: Issue
                            }}>
                                <button id="Vupdate" type="button">View</button>
                            </Link>

                        </div>
                    );
                })}
            </main>
        </div>
    );
}
