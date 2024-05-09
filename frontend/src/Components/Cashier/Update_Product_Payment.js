import "../CSS/Product_Payment.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Headers from "../Staffheader";
import Cashier_Dashboard from "../Cashier/Cashier-Dashboard";
import { useLocation } from 'react-router-dom';

function Update_Product_Payment() {
    const location = useLocation(); // Missing declaration of location

    const [id, setId] = useState(location.state?.ID || '');
    const [RID, setRID] = useState(location.state?.Registered_ID || '');
    const [usertype, setusertype] = useState(location.state?.User_Type || '');
    const [Product_Name, setProduct_Name] = useState(location.state?.Product_Name || '');
    const [Product_ID, setProduct_ID] = useState(location.state?.Product_ID || '');
    const [vehicletype, setvehicletype] = useState(location.state?.Vehicle_Type || '');
    const [Price, setPrice] = useState(location.state?.Price || '');
    const [date, setdate] = useState(location.state?.Date || '');
    const [paymenttype, setpaymenttype] = useState(location.state?.Payment_Type || '');
    const [Count, setCount] = useState(location.state?.Count || '');
    const [Issue, setISSUE] = useState("");

    const [showSubmitButton, setShowSubmitButton] = useState(false);

    useEffect(() => {
        if (location.state && location.state.id) {
            setId(location.state.id); // Corrected setting of Company_ID
        }
    }, [location.state]);

    function sendData(e) {
        e.preventDefault();
        const updateproduct = {
            ID: id,
            User_Type: usertype,
            Registered_ID: RID,
            Product_Name: Product_Name,
            Product_ID: Product_ID,
            Vehicle_Type: vehicletype,
            Price: Price,
            Date: date,
            Payment_Type: paymenttype,
            Count: Count,
            ISSUE: Issue
        };
        axios.post(`http://localhost:5001/Product_Payment_ISSUE/Add`, updateproduct) // Fixed string interpolation
            .then(() => {
                alert("Product payment Update Issue Sent to The manager");
            })
            .catch((err) => {
                alert(err);
            });

    }
    console.log("produc id:" + id);
    return (
        <body className="savindu">
            <Headers />
            <main>
                <div className="Product_payment_container">
                    <h1>Update Product Payment</h1>
                    <form onSubmit={sendData}>
                        <div className="Prow1">
                            <div className="usertype">
                                <label>User Type</label>
                                <select id="usertype" value={usertype} onChange={(e) => setusertype(e.target.value)}>
                                    <option value="Registered_User">Registered User</option>
                                    <option value="Guest_User">Guest User</option>
                                </select>
                            </div>
                            <input type="text" className="RID" placeholder="Registered ID " value={RID}
                                onChange={(e) => setRID(e.target.value)}
                            ></input>
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
                                placeholder="Product ID"
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
                        <div className="Prow5" style={{ display: "block" }}>
                            <input type="text"
                                placeholder="Price"
                                className="Price"
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                            ></input>
                        </div>
                        <input type='text' placeholder='What is the ISSUE' id="issue"
                            value={Issue}
                            onChange={(e) => setISSUE(e.target.value)}
                            style={{
                                width: "30vw", height: "20vh", borderRadius: "1vw", outline: "none", position: "absolute",
                                top: "50vh", left: "35vw", border: "2px solid red", color: "red", fontSize: "1.5rem",
                                display: showSubmitButton ? "block" : "none"

                            }}></input>
                        <button
                            type="submit"
                            id="Pbtn2"
                            style={{ position: "absolute", top: "70vh", left: "40vw", display: showSubmitButton ? "block" : "none", backgroundColor: "red", color: "white" }}
                        >
                            Submit ISSUE
                        </button>
                    </form>
                    <button
                        type="button"
                        id="Pbtn1"
                        onClick={() => setShowSubmitButton(true)}
                        style={{ display: showSubmitButton ? "none" : "block" }}
                    >UPDATE</button>
                    <Link to='/View_Product_Payment'>
                        <button type="submit" id="Pbtn2">Return</button>
                    </Link>
                </div>
            </main>
        </body>
    )
}

export default Update_Product_Payment;
