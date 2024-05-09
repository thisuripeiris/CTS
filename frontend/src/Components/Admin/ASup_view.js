
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Headers from "../Staffheader";
import "../CSS/View_Salary_payment.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function ASuplierView() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = () => {
        axios.get(`http://localhost:5001/Supplier/`)
            .then((res) => {
                setSuppliers(res.data);
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
            doc.save("suppliers.pdf");
        });
    };

    return (
        <div>
            <Headers />
            <main>
                <div className="mainrow">
                    <input type="text" placeholder="Enter the ID" className="Searchbox"></input>
                    <h1 style={{ marginBottom: "1rem" }}>Suppliers</h1>
                    <button onClick={generatePDF} className="generate-pdf-btn">Generate PDF</button>
                    <Link to='/Admin_Dashboard'>
                        <button type="submit" className="return-btn">Return</button>
                    </Link>
                </div>
                <div id="pdf-content">
                    <div className="VSrow1">
                        <h4>SID</h4>
                        <h4>Company Name</h4>
                        <h4>Company ID</h4>
                        <h4>Email</h4>
                    </div>
                    {suppliers.map((supplier) => (
                        <div key={supplier._id} className="VSrow2">
                            <h4>{supplier.SID}</h4>
                            <h4>{supplier.companyName}</h4>
                            <h4>{supplier.companyid}</h4>
                            <h4>{supplier.email}</h4>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
