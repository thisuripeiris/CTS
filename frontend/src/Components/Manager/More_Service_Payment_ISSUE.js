import "../CSS/Product_Payment.css"
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import Headers from "../Staffheader";




export default function Udpate_Service_ISSUE() {
    const location = useLocation();
    const [id, setid] = useState(location.state?.id || '');
    const [ID, setId] = useState(location.state?.ID || '');
    const [User_Type, setUserType] = useState(location.state?.User_Type || '');
    const [Registered_ID, setRID] = useState(location.state?.Registered_ID || '');
    const [Service_Type, setServiceType] = useState(location.state?.Service_Type || '');
    const [Vehicle_Type, setvehicletype] = useState(location.state?.Vehicle_Type || '');
    const [Price, setPrice] = useState(location.state?.Price || '');
    const [Date, setdate] = useState(location.state?.Date || '');
    const [Payment_Type, setpaymenttype] = useState(location.state?.Payment_Type || '');
    const [ISSUE, setISSUE] = useState(location.state?.ISSUE || '');


    function sendData(e) {
        e.preventDefault();
        const newpayment = {
            _id: ID,
            User_Type: User_Type,
            Registered_ID: Registered_ID,
            Service_Type: Service_Type,
            Vehicle_Type: Vehicle_Type,
            Price: Price,
            Date: Date,
            Payment_Type: Payment_Type,
            ISSUE: ISSUE
        };


        axios.put(`http://localhost:5001/Service_Payment/update/${ID}`, newpayment) // Fix: Use put method and lowercase update
            .then(() => {
                alert("Update the Service Payment");
                axios.delete(`http://localhost:5001/Service_Payment_ISSUE/delete/${id}`) // Fix: Use put method and lowercase update
                    .then(() => {
                        alert("Successfull Delete Service payment ISSUE");
                        window.location.href = '/View_Service_Issue'; // Redirect to View_salary_Issue page
                    })
                    .catch((err) => {
                        console.error(err); // Fix: Change alert to console.error for better debugging
                        alert("Error Deleting"); // Fix: Change alert message
                    });
            })
            .catch((err) => {
                console.error(err); // Fix: Change alert to console.error for better debugging
                alert("Error updating Salary"); // Fix: Change alert message
            });

    }
    const handleDelete = () => {
        console.log("My Employee ID is " + id);
        axios.delete(`http://localhost:5001/Service_Payment_ISSUE/delete/${id}`) // Fixed: Use put method and lowercase update
            .then(() => {
                alert("Successfull Delete Service payment ISSUE");
                window.location.href = '/View_Service_Issue'; // Redirect to View_salary_Issue page
            })
            .catch((err) => {
                console.error(err); // Fixed: Changed alert to console.error for better debugging
                alert("Error deleting"); // Fixed: Changed alert message
            });
    };





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
                                <select id="usertype" value={User_Type} onChange={(e) => setUserType(e.target.value)}>
                                    <option value="Registered_User">Registered User</option>
                                    <option value="Guest_User">Guest User</option>
                                </select>
                            </div>
                            <input type="text" className="RID" placeholder="Registered ID " value={Registered_ID} onChange={(e) => setRID(e.target.value)}></input>
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
                            <input
                                type="text"
                                placeholder="Price"
                                className="Price"
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="Prow5">
                            <input
                                type="text"
                                placeholder="Issue"
                                className="Issue"
                                value={ISSUE}
                                onChange={(e) => setISSUE(e.target.value)}
                                style={{ marginLeft: "0", height: "10vh", width: "40vw", marginTop: "5vh" }}
                            />
                        </div>
                        <div className='Prow3'>
                            <button
                                type="submit"
                                id="Pbtn1"
                                onClick={(e) => sendData(e)}
                            >
                                Confirm
                            </button>
                            <button
                                onClick={handleDelete}
                                type="button"
                                id="Pbtn2"
                            >
                                Reject
                            </button>
                        </div>
                    </form>
                    <Link to='/Cashier_Dashboard'>
                        <button type="button" id="Pbtn2">Return</button>
                    </Link>
                </div>
            </main>
        </body>
    )
}