

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Headers from "../Staffheader";
import "../CSS/View_Salary_payment.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function ViewCustomers() {
    const [customers, setCustomers] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = () => {
        axios.get(`http://localhost:5001/Customer/`)
            .then((res) => {
                setCustomers(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/Customer/delete/${id}`)
            .then((res) => {
                setCustomers(prevCustomers => prevCustomers.filter(customer => customer._id !== id));
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        html2canvas(document.querySelector("#pdf-content")).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            doc.save("customers.pdf");
        });
    };

    return (
        <div>
            <Headers />
            <main>
                <div className="mainrow">
                    <input type="text" placeholder="Enter the ID" className="Searchbox"></input>
                    <h1 style={{ marginBottom: "1rem" }}>Customers</h1>
                    <button onClick={generatePDF} className="generate-pdf-btn">Generate PDF</button>
                    <Link to='/Admin_Dashboard'>
                        <button type="submit" className="return-btn">Return</button>
                    </Link>
                </div>
                <div id="pdf-content">
                    <div className="VSrow1">
                        <h4>First Name</h4>
                        <h4>Last Name</h4>
                        <h4>Email</h4>
                        <h4>Address</h4>
                        <h4>Tel</h4>
                    </div>
                    {customers.map((customer) => (
                        <div key={customer._id} className="VSrow2">
                            <h4>{customer.firstName}</h4>
                            <h4>{customer.lastName}</h4>
                            <h4>{customer.email}</h4>
                            <h4>{customer.address}</h4>
                            <h4>{customer.tel}</h4>
                            {/* <button onClick={() => handleDelete(customer._id)} className="delete-btn">Delete</button> */}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
