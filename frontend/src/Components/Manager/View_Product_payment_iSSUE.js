import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import UpdateSalary from "../More_View_Salary_payment";
import Headers from "../Staffheader";
import "../CSS/View_Salary_payment.css";

export default function View_Product_Issue() {

    const [salary, setsalary] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchpayments();
    }, []);

    const fetchpayments = () => {
        axios.get(`http://localhost:5001/Product_Payment_ISSUE/`)
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
                    <h1 style={{ marginBottom: "1rem" }}>Product Payment Update ISSUE</h1>
                    <button type="submit" id="VSPReturn">Return</button>
                </div>
                <div className="VSrow1">
                    <h4>User_Type</h4>
                    <h4>Service_Type</h4>
                    <h4>Vehicle_Type</h4>
                    <h4>Date</h4>
                    <h4>Issue</h4>
                    <h4>Action 1</h4>
                </div>
                {salary.map((salary) => {
                    const id = salary._id;
                    const ID = salary.ID;
                    const User_Type = salary.User_Type;
                    const Registered_ID = salary.Registered_ID;
                    const Service_Type = salary.Service_Type;
                    const Vehicle_Type = salary.Vehicle_Type;
                    const Price = salary.Price;
                    const Date = salary.Date;
                    const Payment_Type = salary.Payment_Type;
                    const Issue = salary.Issue;


                    return (
                        <div key={salary._id} className="VSrow2">
                            <h4>{salary.User_Type}</h4>
                            <h4>{salary.Product_Name}</h4>
                            <h4>{salary.Vehicle_Type}</h4>
                            <h4>{salary.Date}</h4>
                            <h4>{salary.ISSUE}</h4>

                            <Link to="/Product_Update_Payment_ISSUE" state={{
                                id: id, ID: ID, User_Type: User_Type, Registered_ID: Registered_ID, Payment_Type: Payment_Type,
                                Date: Date, Service_Type: Service_Type, Vehicle_Type: Vehicle_Type, Price: Price, Issue: Issue
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
