
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Headers from "../Staffheader";
import "../CSS/View_Salary_payment.css";

export default function ViewSuppliers() {
    const [suppliers, setsuppliers] = useState([]);
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = () => {
        axios.get(`http://localhost:5001/Supplier/`)
            .then((res) => {
                console.log(res.data);
                setsuppliers(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredSuppliers = suppliers.filter((supplier) =>
        supplier.SID.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/Supplier/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                setsuppliers(prevSuppliers => prevSuppliers.filter(supplier => supplier._id !== id));
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div>
            <Headers />
            <main>
                <div className="mainrow">
                    <input
                        type="text"
                        placeholder="Enter ID or Company Name"
                        className="Searchbox"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <h1 style={{ marginBottom: "1rem" }}>Suppliers</h1>
                    <Link to='/addSupplier'>
                        <button type="submit" id="VSPReturn">Add Suppliers</button>
                    </Link>
                    <Link to='/Manager_Dashboard'>
                        <button type="submit" id="VSPReturn">Return</button>
                    </Link>
                </div>
                <div className="VSrow1">
                    <h4>Company Name</h4>
                    <h4>Company id</h4>
                    <h4>Email</h4>
                    <h4>Action 1</h4>
                    <h4>Action 2</h4>
                </div>
                {filteredSuppliers.map((supplier) => {
                    const { _id, SID, companyName, companyid, email } = supplier;
                    return (
                        <div key={_id} className="VSrow2">
                            <h4>{companyName}</h4>
                            <h4>{companyid}</h4>
                            <h4>{email}</h4>
                            <Link to="/Update_Supplier" state={{ id: _id, companyName, companyid, email, SID }}>
                                <button id="Vupdate" type="button">Update</button>
                            </Link>
                            <button id="Vdelete" onClick={() => handleDelete(_id)}>Delete</button>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}
