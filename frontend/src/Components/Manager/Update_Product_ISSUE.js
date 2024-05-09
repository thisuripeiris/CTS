
import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import Headers from "../Staffheader";

export default function Product_Update_Payment_ISSUE() {
    const location = useLocation();
    const [id, setId] = useState(location.state?.id || '');
    const [ID, setID] = useState(location.state?.ID || '');
    const [RID, setRID] = useState(location.state?.Registered_ID || '');
    const [usertype, setusertype] = useState(location.state?.User_Type || '');
    const [Product_Name, setProduct_Name] = useState(location.state?.Product_Name || '');
    const [Product_ID, setProduct_ID] = useState(location.state?.Product_ID || '');
    const [vehicletype, setvehicletype] = useState(location.state?.Vehicle_Type || '');
    const [Price, setPrice] = useState(location.state?.Price || '');
    const [date, setdate] = useState(location.state?.Date || '');
    const [paymenttype, setpaymenttype] = useState(location.state?.Payment_Type || '');
    const [Count, setCount] = useState(location.state?.Count || '');
    const [Issue, setIssue] = useState(location.state?.Issue || '');

    const sendData = (e) => {
        e.preventDefault();
        const newpayment = {
            User_Type: usertype,
            Registered_ID: RID,
            Product_Name: Product_Name,
            Product_ID: Product_ID,
            Vehicle_Type: vehicletype,
            Price: Price,
            Date: date,
            Payment_Type: paymenttype,
            Count: Count,
            Issue: Issue
        };

        axios.post("http://localhost:5001/Product_Payment/update/${ID}", newpayment)
            .then(() => {
                alert("Product Payment Update SUccessfully");
                axios.delete(`http://localhost:5001/Product_Payment_ISSUE/delete/${id}`) // Fix: Use put method and lowercase update
                    .then(() => {
                        alert("Successfull Delete Product Payment ISSUE");
                        window.location.href = '/View_salary_Issue'; // Redirect to View_salary_Issue page
                    })
                    .catch((err) => {
                        console.error(err); // Fix: Change alert to console.error for better debugging
                        alert("Error Deleting"); // Fix: Change alert message
                    });
            })
            .catch((err) => {
                alert(err);
            });
    }


    const handleDelete = () => {
        console.log("My Employee ID is " + id);
        axios.delete(`http://localhost:5001/Product_Payment_ISSUE/delete/${id}`) // Fix: Use put method and lowercase update
            .then(() => {
                alert("Successfull Delete Product Payment ISSUE");
                window.location.href = '/View_salary_Issue'; // Redirect to View_salary_Issue page
            })
            .catch((err) => {
                console.error(err); // Fix: Change alert to console.error for better debugging
                alert("Error Deleting"); // Fix: Change alert message
            });
    };

    console.log("ISSUE" + Issue);
    return (
        <div className="savindu">
            <Headers />
            <main>
                <div className="Product_payment_container">
                    <h1>Product Payment Update ISSUE</h1>
                    <form onSubmit={sendData}>
                        <div className="Prow1">
                            <div className="usertype">
                                <label>User Type</label>
                                <select id="usertype" value={usertype} onChange={(e) => setusertype(e.target.value)}>
                                    <option value="Registered_User">Registered User</option>
                                    <option value="Guest_User">Guest User</option>
                                </select>
                            </div>
                            <input type="text" className="RID" placeholder="Registered ID" value={RID}
                                onChange={(e) => setRID(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="Product_Name"
                                value={Product_Name}
                                onChange={(e) => setProduct_Name(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Model"
                                className="Product_ID"
                                value={Product_ID}
                                onChange={(e) => setProduct_ID(e.target.value)}
                            />
                        </div>
                        <div className="Prow3">
                            <div className="vehicletype">
                                <label>Vehicle Type</label>
                                <select id="vehicletype" value={vehicletype} onChange={(e) => setvehicletype(e.target.value)}>
                                    <option value="Car">Car</option>
                                    <option value="Van">Van</option>
                                    <option value="Three Wheels">Three Wheels</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Lorrie">Lorrie</option>
                                    <option value="Bowser">Bowser</option>
                                </select>
                            </div>
                            <input
                                type="text"
                                placeholder="Count"
                                className="Count"
                                value={Count}
                                onChange={(e) => setCount(e.target.value)}
                            />
                        </div>
                        <div className="Prow4">
                            <input
                                type="date"
                                className="date"
                                value={date}
                                onChange={(e) => setdate(e.target.value)}
                            />
                            <div className="paymenttype">
                                <label>Payment type</label>
                                <select id="paymenttype" value={paymenttype} onChange={(e) => setpaymenttype(e.target.value)}>
                                    <option value="Online">Online</option>
                                    <option value="Physical">Physical</option>
                                </select>
                            </div>
                        </div>
                        <div className="Prow5">
                            <input type="text"
                                placeholder="Price"
                                className="Price"
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="Prow6">
                            <input
                                type="text"
                                placeholder="Issue"
                                className="Last_Name"
                                value={Issue}
                                onChange={(e) => setIssue(e.target.value)}
                                style={{ marginLeft: "0", height: "10vh", width: "40vw", marginTop: "5vh" }}

                            />
                        </div>
                        <div className='Prow3'>
                            <button
                                type="submit"
                                id="Pbtn1"
                            >
                                Confirm
                            </button>
                            <button
                                type="button"
                                id="Pbtn2"
                                onClick={handleDelete}                             >
                                Reject
                            </button>
                        </div>
                    </form>
                    <Link to='/Cashier_Dashboard'>
                        <button id="Pbtn2">Return</button>
                    </Link>
                </div>
            </main>
        </div>
    )
}
