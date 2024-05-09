import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import UpdateSalary from "./More_View_Salary_payment";
import Headers from "./Staffheader";
import "./CSS/View_Salary_payment.css";

export default function ViewStockPayment() {
    const [salaries, setSalaries] = useState([]);
    const location = useLocation();
    const [Issue, setISSUE] = useState("");
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    useEffect(() => {
        fetchSalaries();
    }, []);

    const fetchSalaries = () => {
        axios.get(`http://localhost:5001/salary/`)
            .then((res) => {
                console.log(res.data);
                setSalaries(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/salary/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                setSalaries(prevSalaries => prevSalaries.filter(salary => salary._id !== id));
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

        axios.post(`http://localhost:5001/Salary_Delete_ISSUE/add`, updatesalary)
            .then(() => {
                alert("Send The Salary Delete ISSUE to Manager");
            })
            .catch((err) => {
                console.error(err);
                alert("Error updating Salary");
            });
    }

    return (
        <div className="Viewpage">
            <Headers />
            <main>
                <div className="mainrow">
                    <input type="text" placeholder="Enter the ID" className="Searchbox"></input>
                    <h1 style={{ marginBottom: "1rem" }}>Employee Salary Payment</h1>
                    <Link to="/HRDashboard">
                        <button type="submit" id="VSPReturn">Return</button>
                    </Link>
                </div>
                <div className="VSrow1">
                    <h4>Employee ID</h4>
                    <h4>First Name</h4>
                    <h4>Last Name</h4>
                    <h4>Payment Type</h4>
                    <h4>Action 1</h4>
                    <h4>Action 2</h4>
                    <h4>Action 3</h4>
                </div>
                {salaries.map((salary) => {
                    const ID = salary._id;
                    const RID = salary.RID;
                    const First_Name = salary.First_Name;
                    const Last_Name = salary.Last_Name;
                    const Payment_Type = salary.Payment_Type;
                    const Date = salary.Date;
                    const Email = salary.Email;
                    const Amount = salary.Amount;
                    const Payment_Month = salary.Payment_Month;
                    const Payment_Date = salary.Payment_Date;
                    const Phone = salary.Phone;

                    return (
                        <div key={salary._id} className="VSrow2">
                            <h4>{salary.RID}</h4>
                            <h4>{salary.First_Name}</h4>
                            <h4>{salary.Last_Name}</h4>
                            <h4>{salary.Payment_Type}</h4>
                            <Link to="/UpdateSalary" state={{
                                id: ID, RID: RID, First_Name: First_Name, Last_Name: Last_Name, Payment_Type: Payment_Type,
                                Date: Date, Email: Email, Amount: Amount, Payment_Month: Payment_Month, Payment_Date: Payment_Date, Phone: Phone
                            }}>
                                <button id="Vupdate" type="button">Update</button>
                            </Link>
                            <button id="Vdelete" onClick={() => setShowSubmitButton(true)}>Request Delete</button>
                            <Link to="/SalaryPDF" state={{
                                id: ID, RID: RID, First_Name: First_Name, Last_Name: Last_Name, Payment_Type: Payment_Type,
                                Date: Date, Email: Email, Amount: Amount, Payment_Month: Payment_Month, Payment_Date: Payment_Date, Phone: Phone
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
    );
}
