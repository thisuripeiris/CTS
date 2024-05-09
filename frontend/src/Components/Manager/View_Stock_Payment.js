import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import UpdateSalary from "../More_View_Salary_payment";
import Headers from "../Staffheader";
import "../CSS/View_Salary_payment.css";

export default function ViewSalaryPayment() {
    const [payments, setpayments] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchpayments();
    }, []);

    const fetchpayments = () => {
        axios.get(`http://localhost:5001/Stock_Payment/`)
            .then((res) => {
                console.log(res.data);
                setpayments(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/Stock_Payment/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                setpayments(prevSalaries => prevSalaries.filter(salary => salary._id !== id));
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
                    <h1 style={{ marginBottom: "1rem" }}>Stock Payment</h1>
                    <button type="submit" id="VSPReturn">Return</button>
                </div>
                <div className="VSrow1">
                    <h4>Company Name</h4>
                    <h4>Product Name</h4>
                    <h4>Date</h4>
                    <h4>Vehicle Type</h4>
                    <h4>Action 1</h4>
                    <h4>Action 2</h4>
                    <h4>Action 3</h4>
                </div>
                {payments.map((payments) => {
                    const ID = payments._id;
                    const Company_ID = payments.Company_ID;
                    const Company_Name = payments.Company_Name;
                    const Product_ID = payments.Product_ID;
                    const Product_Name = payments.Product_Name;
                    const Date = payments.Date;
                    const Stock_count = payments.Stock_count;
                    const Stock_Price = payments.Stock_Price;
                    const Vehicle_Type = payments.Vehicle_Type;
                    const Description = payments.Description;

                    return (
                        <div key={payments._id} className="VSrow2">
                            <h4>{payments.Company_Name}</h4>
                            <h4>{payments.Product_Name}</h4>
                            <h4>{payments.Date}</h4>
                            <h4>{payments.Vehicle_Type}</h4>
                            <Link to="/Update_Stock_Payment" state={{
                                id: ID, Company_ID: Company_ID, Company_Name: Company_Name, Product_ID: Product_ID, Product_Name: Product_Name,
                                Date: Date, Stock_count: Stock_count, Stock_Price: Stock_Price, Vehicle_Type: Vehicle_Type, Description: Description
                            }}>
                                <button id="Vupdate" type="button">Update</button>
                            </Link>
                            <button id="Vdelete" onClick={() => handleDelete(payments._id)}>Delete</button>
                            <Link to="/SalaryPDF" state={{
                                id: ID, Company_ID: Company_ID, Company_Name: Company_Name, Product_ID: Product_ID, Product_Name: Product_Name,
                                Date: Date, Stock_count: Stock_count, Stock_Price: Stock_Price, Vehicle_Type: Vehicle_Type, Description: Description
                            }}>
                                <button id="VPDF">PDF</button>
                            </Link>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}
