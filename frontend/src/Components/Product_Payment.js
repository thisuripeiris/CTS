
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Headers from "./Staffheader";
import { jsPDF } from "jspdf";

function Product_Payment() {
    const [RID, setRID] = useState("");
    const [usertype, setusertype] = useState("");
    const [Product_Name, setProduct_Name] = useState("");
    const [Product_ID, setProduct_ID] = useState("");
    const [vehicletype, setvehicletype] = useState("");
    const [Price, setPrice] = useState("");
    const [date, setdate] = useState("");
    const [paymenttype, setpaymenttype] = useState("");
    const [Count, setCount] = useState("");
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [formData, setFormData] = useState(null); // To store form data
    const [formDataArray, setFormDataArray] = useState([]); // To store form data array

    function sendData(e) {
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
            Count: Count
        };
        setFormData(newpayment); // Store form data
        setFormDataArray(prevState => [...prevState, newpayment]);
        // Clear form fields after submitting
        clear();
        axios.post("http://localhost:5001/Product_Payment/Add", newpayment)
            .then(() => {
                alert("Payment Added");
                setShowSubmitButton(true);

            })
            .catch((err) => {
                alert(err);
            });
    }

    function clear() {
        setCount("");
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
        doc.save("product_payment.pdf");
    }

    return (
        <div className="savindu">
            <Headers />
            <main>
                <div className="Product_payment_container">
                    <h1>Product Payment</h1>
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
                        <div className="Prow5" style={{ display: "block" }}>
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
                        <h3 style={{ color: "red", fontSize: "1.5rem" }}>Do You Want to Add Another Product Payment?</h3>
                        <div className="Prow2" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "0" }}>
                            <button id="Pbtn1" style={{ marginTop: "0!" }} onClick={() => { clear(); setShowSubmitButton(false) }}>Yes</button>
                            <button id="Pbtn2" style={{ marginTop: "0!" }} onClick={() => { setShowSubmitButton(false); generatePDF(); }}>No</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Product_Payment;


