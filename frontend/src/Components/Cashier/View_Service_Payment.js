import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Headers from "../Staffheader";





export default function View_Service_Payment() {
    const [service, setservice] = useState([]);
    const location = useLocation();
    const [Issue, setISSUE] = useState("");
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    useEffect(() => {
        fetchSalaries();
    }, []);

    const fetchSalaries = () => {
        axios.get(`http://localhost:5001/Service_Payment/`)
            .then((res) => {
                console.log(res.data);
                setservice(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/Service_Payment/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                setservice(prevSalaries => prevSalaries.filter(service => service._id !== id));
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

        axios.post(`http://localhost:5001/Service_Delete_ISSUE/add`, updatesalary)
            .then(() => {
                alert("Send The Service payment Delete ISSUE to Manager");
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
                    <h1 style={{ marginBottom: "1rem" }}>Service Payment</h1>
                    <button type="submit" id="VSPReturn">Return</button>
                </div>
                <div className="VSrow1">
                    <h4>User Type</h4>
                    <h4>Service Type</h4>
                    <h4>Vehicle Type</h4>
                    <h4>Date</h4>
                    <h4>Action 1</h4>
                    <h4>Action 2</h4>
                    <h4>Action 3</h4>
                </div>
                {service.map((service) => {
                    const User_Type = service.User_Type;
                    const Registered_ID = service.Registered_ID;
                    const Service_Type = service.Service_Type;
                    const Vehicle_Type = service.Vehicle_Type;
                    const Price = service.Price;
                    const Date = service.Date;
                    const Payment_Type = service.Payment_Type;
                    const ID = service._id;



                    return (
                        <div key={service._id} className="VSrow2">
                            <h4>{service.User_Type}</h4>
                            <h4>{service.Service_Type}</h4>
                            <h4>{service.Vehicle_Type}</h4>
                            <h4>{service.Date}</h4>
                            <Link to="/Update_Service_Payment" state={{
                                ID: ID, User_Type: User_Type, Registered_ID: Registered_ID, Service_Type: Service_Type,
                                Vehicle_Type: Vehicle_Type, Price: Price, Date: Date, Payment_Type: Payment_Type
                            }}>
                                <button id="Vupdate" type="button">Update</button>
                            </Link>
                            <button id="Vdelete" onClick={() => setShowSubmitButton(true)}>Request Delete</button>
                            <Link to="/SalaryPDF" state={{
                                ID: ID, User_Type: User_Type, Registered_ID: Registered_ID, Service_Type: Service_Type,
                                Vehicle_Type: Vehicle_Type, Price: Price, Date: Date, Payment_Type: Payment_Type
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