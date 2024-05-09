import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Headers from "./Staffheader";
import "./CSS/Employee_Salary_Payment.css";
import { saveAs } from 'file-saver'; // Import saveAs function for file download


export default function Employee_Salary_Payment() {
  const [Employee_ID, setEmployee_ID] = useState("");
  const [First_Name, setFirst_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Amount, setAmount] = useState("");
  const [Payment_Type, setPayment_Type] = useState(""); // Fixed typo in the state variable name
  const [Date, setDate] = useState("");
  const [Payment_Month, setPayment_Month] = useState("");
  const [Payment_Date, setPayment_Date] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newsalary = {
      RID: Employee_ID,
      First_Name: First_Name,
      Last_Name: Last_Name,
      Phone: Phone,
      Email: Email,
      Amount: Amount,
      Payment_Type: Payment_Type, // Fixed variable name
      Payment_Month: Payment_Month,
      Payment_Day: Payment_Date, // Fixed variable name
      Date: Date,
    };
    axios
      .post("http://localhost:5001/Salary/Add", newsalary)
      .then(() => {
        alert("Payment Added Successfully");
      })
      .catch((err) => {
        alert(err);
      });
  }
  function generatePDF() {
    // Logic to generate PDF using entered data
    // Example:
    const pdfContent = `Employee ID: ${Employee_ID}\n
                                Name: ${First_Name} ${Last_Name}\n
                                Phone: ${Phone}\n
                                Email: ${Email}\n
                                Amount: ${Amount}\n
                                Payment Type: ${Payment_Type}\n
                                Date: ${Date}\n
                                Payment Month: ${Payment_Month}\n
                                Payment Date: ${Payment_Date}`;

    // Example using jspdf library
    // import jsPDF from 'jspdf';
    // const doc = new jsPDF();
    // doc.text(pdfContent, 10, 10);
    // doc.save('salary_payment.pdf');

    // For demonstration purposes, let's save an empty PDF
    const blob = new Blob([], { type: 'application/pdf' });
    saveAs(blob, 'salary_payment.pdf'); // Auto-download PDF
  }
  const handlePaymentTypeChange = (value) => {
    const paymentDate = document.getElementById("paymentDate");
    const Month = document.getElementById("Month");
    const Prow5 = document.getElementById("Prow5");

    if (value === "Monthly") {
      Prow5.style.display = "block";
      paymentDate.style.display = "none";
      Month.style.display = "block";
    } else if (value === "none") {
      paymentDate.style.display = "none";
      Month.style.display = "none";
      Prow5.style.display = "none";
      Prow5.style.marginLeft = "27%";
    }
    else {
      paymentDate.style.display = "block";
      Month.style.display = "none";
      Prow5.style.display = "block";
      Prow5.style.marginLeft = "27%";

    }
  };

  return (
    <body>
      <Headers />
      <main>
        <h1 className="savih1">Employee Salary Payment </h1>
        <div className="Slary_payment_container">
          <form onSubmit={sendData}>
            <div className="Prow1">
              <input
                type="text"
                placeholder="Employee ID"
                className="Employee_ID"
                value={Employee_ID}
                onChange={(e) => setEmployee_ID(e.target.value)}
              />
              <input
                type="text"
                placeholder="First Name"
                className="First_Name"
                value={First_Name}
                onChange={(e) => setFirst_Name(e.target.value)}
              />
            </div>
            <div className="Prow2">
              <input
                type="text"
                placeholder="Last Name"
                className="Last_Name"
                value={Last_Name}
                onChange={(e) => setLast_Name(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone"
                className="Phone"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="Prow3">
              <input
                type="text"
                placeholder="Email"
                className="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Amount"
                className="Amount"
                value={Amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="Prow4">
              <div className="paymenttype">
                <label>Payment Type</label>
                <select
                  id="paymenttype"
                  value={Payment_Type}
                  onChange={(e) => {
                    setPayment_Type(e.target.value);
                    handlePaymentTypeChange(e.target.value);
                  }}                >
                  <option value="none">none</option>
                  <option value="Monthly">Monthly Payment</option>
                  <option value="Daily">Daily Payment</option>
                </select>
              </div>
              <div className="paiddate">
                <label>Date</label>
                <input
                  type="date"
                  placeholder="Date"
                  className="Date"
                  value={Date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="Prow5" id="Prow5">
              <div className="Month" id="Month">
                <label>Payment Month</label>
                <input
                  type="month"
                  placeholder="Payment Month"
                  className="Payment_Month"
                  value={Payment_Month}
                  onChange={(e) => setPayment_Month(e.target.value)}
                />
              </div>
              <div className="paymentDate" id="paymentDate">
                <label>Payment Date</label>
                <input
                  type="date"
                  placeholder="Payment Date"
                  className="Payment_Date"
                  value={Payment_Date}
                  onChange={(e) => setPayment_Date(e.target.value)}
                />
              </div>

            </div>
            <button type="submit" id="Pbtn1">
              ADD
            </button>
          </form>
          <Link to="/HRDashboard"> {/* Assuming you want to link to the home page, replace '/' with the appropriate path */}
            <button id="Pbtn2">Return</button>
          </Link>
        </div>
      </main>

    </body>
  );
}
