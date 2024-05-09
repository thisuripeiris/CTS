import "../CSS/Product_Payment.css"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Headers from "../Staffheader";
import Cashier_Dashboard from "./Cashier-Dashboard";
import { useLocation } from 'react-router-dom';




export default function Update_Service_Payment() {
    const location = useLocation(); // Missing declaration of location

    const [id, setId] = useState(location.state?.ID || '');
    const [User_Type, setusertype] = useState(location.state?.User_Type || '');
    const [Registered_ID, setRID] = useState(location.state?.Registered_ID || '');
    const [Service_Type, setServiceType] = useState(location.state?.Service_Type || '');
    const [Vehicle_Type, setvehicletype] = useState(location.state?.Vehicle_Type || '');
    const [Price, setPrice] = useState(location.state?.Price || '');
    const [Date, setdate] = useState(location.state?.Date || '');
    const [Payment_Type, setpaymenttype] = useState(location.state?.Payment_Type || '');
    const [Issue, setISSUE] = useState("");

    const [showSubmitButton, setShowSubmitButton] = useState(false);
    useEffect(() => {
        if (location.state && location.state.id) {
            setId(location.state.id); // Corrected setting of Company_ID
        }
    }, [location.state]);

    function sendData(e) {
        e.preventDefault();
        const newpayment = {
            ID: id,
            User_Type: User_Type,
            Registered_ID: Registered_ID,
            Service_Type: Service_Type,
            Vehicle_Type: Vehicle_Type,
            Price: Price,
            Date: Date,
            Payment_Type: Payment_Type,
            ISSUE: Issue

        };
        axios.post(`http://localhost:5001/Service_Payment_ISSUE/Add`, newpayment) // Fixed URL string interpolation
            .then(() => {
                alert("Service payment Update Issue Sent to The manager");
            })
            .catch((err) => {
                alert(err);
            });
    }
    console.log("Service id" + id);
    return (
        <body className="savindu">
            <Headers />
            <main>
                <div className="Product_payment_container">
                    <h1>Update Service Payment</h1>
                    <form onSubmit={sendData}>
                        <div className="Prow1">
                            <div className="usertype">
                                <label>User Type</label>
                                <select id="usertype" value={User_Type} onChange={(e) => setusertype(e.target.value)}>
                                    <option value="Registered_User">Registered User</option>
                                    <option value="Guest_User">Guest User</option>
                                </select>
                            </div>
                            <input type="text" className="RID" placeholder="Registered ID " value={Registered_ID}
                                onChange={(e) => setRID(e.target.value)}
                            ></input>
                        </div>
                        <div className="Prow2">
                            <div className="usertype">
                                <label>Service Type</label>
                                <select id="usertype" value={Service_Type} onChange={(e) => setServiceType(e.target.value)}>
                                    <option value="Tube_Change">Tube Change</option>
                                    <option value="Tyre_Change">Tyre Change</option>
                                </select>
                            </div>
                            <div className="vehicletype">
                                <label>Vehicle Type</label>
                                <select id="vehicletype" value={Vehicle_Type} onChange={(e) => setvehicletype(e.target.value)}>
                                    <option value="Car">Car</option>
                                    <option value="Van">Van</option>
                                    <option value="Three Wheels">Three Wheels</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Lorrie">Lorrie</option>
                                    <option value="Bowser">Bowser</option>
                                </select>
                            </div>
                        </div>
                        <div className="Prow3">
                            <div className="paymenttype">
                                <label>Payment type</label>
                                <select id="paymenttype" value={Payment_Type} onChange={(e) => setpaymenttype(e.target.value)}>
                                    <option value="Online">Online</option>
                                    <option value="Physical">Physical</option>
                                </select>
                            </div>
                            <input
                                type="date"
                                className="date"
                                value={Date}
                                onChange={(e) => setdate(e.target.value)}
                            />
                        </div>
                        <div className="Prow4">
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
                    <Link to='/Cashier_Dashboard'>
                        <button type="submit" id="Pbtn2">Return</button>
                    </Link>
                </div>
            </main>
        </body>
    )
}