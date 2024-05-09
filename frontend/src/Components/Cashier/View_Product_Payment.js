import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Headers from "../Staffheader";





export default function View_Product_Payment() {
    const [products, setproducts] = useState([]);
    const location = useLocation();
    const [Issue, setISSUE] = useState("");
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    useEffect(() => {
        fetchSalaries();
    }, []);

    const fetchSalaries = () => {
        axios.get(`http://localhost:5001/Product_Payment/`)
            .then((res) => {
                console.log(res.data);
                setproducts(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/Product_Payment/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                setproducts(prevSalaries => prevSalaries.filter(salary => salary._id !== id));
            })
            .catch((err) => {
                alert(err.message);
            });
    };
    function sendData(id) {
        const updatesalary = {
            ID: id,
            Issue: Issue
        };

        axios.post(`http://localhost:5001/Product_Delete_ISSUE/add`, updatesalary)
            .then(() => {
                alert("Send The Product payment Delete ISSUE to Manager");
            })
            .catch((err) => {
                console.error(err);
                alert("Error updating Salary");
            });
    }

    return (

        <div>
            <Headers />
            <main>
                <div className="mainrow">
                    <input type="text" placeholder="Enter the ID"></input>
                    <h1 style={{ marginBottom: "1rem" }}>Product Payment</h1>
                    <Link to="/Cashier_Dashboard">
                        <button type="submit" id="VSPReturn">Return</button>
                    </Link>
                </div>
                <div className="VSrow1">
                    <h4>User Type</h4>
                    <h4>Product_Name</h4>
                    <h4>Vehicle_Type</h4>
                    <h4>Date</h4>
                    <h4>Action 1</h4>
                    <h4>Action 2</h4>
                    <h4>Action 3</h4>
                </div>
                {products.map((products) => {
                    const User_Type = products.User_Type;
                    const Registered_ID = products.Registered_ID;
                    const Product_Name = products.Product_Name;
                    const Product_ID = products.Product_ID;
                    const Vehicle_Type = products.Vehicle_Type;
                    const Price = products.Price;
                    const Date = products.Date;
                    const Count = products.Count;
                    const Payment_Type = products.Payment_Type;
                    const ID = products._id;



                    return (
                        <div key={products._id} className="VSrow2">
                            <h4>{products.User_Type}</h4>
                            <h4>{products.Product_Name}</h4>
                            <h4>{products.Vehicle_Type}</h4>
                            <h4>{products.Date}</h4>
                            <Link to="/Update_Product_Payment" state={{
                                ID: ID, User_Type: User_Type, Registered_ID: Registered_ID, Product_Name: Product_Name, Product_ID: Product_ID,
                                Vehicle_Type: Vehicle_Type, Price: Price, Count: Count, Date: Date, Payment_Type: Payment_Type
                            }}>
                                <button id="Vupdate" type="button">Update</button>
                            </Link>
                            <button id="Vdelete" onClick={() => setShowSubmitButton(true)}>Request Delete</button>
                            <Link to="/SalaryPDF" state={{
                                ID: ID, User_Type: User_Type, Registered_ID: Registered_ID, Product_Name: Product_Name, Product_ID: Product_ID,
                                Vehicle_Type: Vehicle_Type, Price: Price, Count: Count, Date: Date, Payment_Type: Payment_Type
                            }}>
                                <button id="VPDF">PDF</button>
                            </Link>
                            <input type='text' placeholder='What is the ISSUE' id="issue"
                                value={Issue}
                                onChange={(e) => setISSUE(e.target.value)}
                                style={{
                                    width: "30vw", height: "20vh", borderRadius: "1vw", outline: "none", position: "absolute",
                                    top: "50vh", left: "35vw", border: "2px solid red", color: "red", fontSize: "1.5rem",
                                    display: showSubmitButton ? "block" : "none"
                                }}
                            />
                            <button
                                id="VSPReturn"
                                onClick={() => {
                                    sendData(ID);
                                    setShowSubmitButton(true);
                                }}
                                style={{
                                    position: "absolute", top: "75vh", left: "44vw",
                                    display: showSubmitButton ? "block" : "none"
                                }}
                            >
                                Send ISSUE
                            </button>
                        </div>
                    );
                })}
            </main>
        </div>
    )
}