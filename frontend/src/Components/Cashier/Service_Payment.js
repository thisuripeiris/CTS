import "../CSS/Product_Payment.css"
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Headers from "../Staffheader";
import Cashier_Dashboard from "./Cashier-Dashboard";
import { jsPDF } from "jspdf";




export default function Service_Payment() {
    const [User_Type, setusertype] = useState("");
    const [Registered_ID, setRID] = useState("");
    const [Service_Type, setServiceType] = useState("");
    const [Vehicle_Type, setvehicletype] = useState("");
    const [Price, setPrice] = useState("");
    const [Date, setdate] = useState("");
    const [Payment_Type, setpaymenttype] = useState("");
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [formData, setFormData] = useState(null); // To store form data
    const [formDataArray, setFormDataArray] = useState([]); // To store form data array


    function sendData(e) {
        e.preventDefault();
        const newpayment = {
            User_Type: User_Type,
            Registered_ID: Registered_ID,
            Service_Type: Service_Type,
            Vehicle_Type: Vehicle_Type,
            Price: Price,
            Date: Date,
            Payment_Type: Payment_Type,

        };

        setFormData(newpayment); // Store form data
        setFormDataArray(prevState => [...prevState, newpayment]);
        // Clear form fields after submitting
        clear();
        axios.post("http://localhost:5001/Service_Payment/Add", newpayment)
            .then(() => {
                alert("Payment Added");

            })
            .catch((err) => {
                alert(err);
            });
    }


    function clear() {
        setServiceType("");
        setPrice("");
    }

    function generatePDF() {
        const doc = new jsPDF();
        let yPos = 10; // Initial Y position
        formDataArray.forEach((formData, index) => {
            Object.keys(formData).forEach((key, i) => {
                doc.text(`${key}: ${formData[key]}`, 10, yPos + i * 10);
            });
            yPos += Object.keys(formData).length * 10 + 10; // Increment Y position
            if (index < formDataArray.length - 1) {
            }
        });
        doc.save("Service_payment.pdf");
    }

    return (
        <body className="savindu">
            <Headers />
            <main>
                <div className="Product_payment_container">
                    <h1>Service Payment</h1>
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

                        <button id="Pbtn1" onClick={() => { setShowSubmitButton(true); }}>ADD</button>
                    </form>
                    <Link to='/Cashier_Dashboard'>
                        <button type="submit" id="Pbtn2">Return</button>
                    </Link>
                </div>
                <div className="display" style={{ display: showSubmitButton ? "block" : "none" }} >
                    <div className="Cart" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", width: "40vw", height: "20vh", position: "absolute", top: "50vh", left: "30vw", backgroundColor: "white" }}>
                        <h3 style={{ color: "red", fontSize: "1.5rem" }}>Do You Want to Add Another Service Payment?</h3>
                        <div className="Prow2" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "0" }}>
                            <button id="Pbtn1" style={{ marginTop: "0!" }} onClick={() => { clear(); setShowSubmitButton(false) }}>Yes</button>
                            <button id="Pbtn2" style={{ marginTop: "0!" }} onClick={() => { setShowSubmitButton(false); generatePDF(); }}>No</button>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}