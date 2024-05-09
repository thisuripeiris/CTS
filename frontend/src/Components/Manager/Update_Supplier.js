
import React, { useState, useEffect } from 'react';
import Headers from '../Staffheader';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

export default function Update_Supplier() {

    const location = useLocation();
    const [id, setid] = useState(location.state?.id || '');
    const [SID, setSID] = useState(location.state?.SID || '');
    const [companyName, setcompanyName] = useState(location.state?.companyName || '');
    const [companyid, setcompanyid] = useState(location.state?.companyid || '');
    const [address, setaddress] = useState(location.state?.address || '');
    const [city, setcity] = useState(location.state?.city || '');
    const [country, setcountry] = useState(location.state?.country || '');
    const [tel, settel] = useState(location.state?.tel || '');
    const [email, setemail] = useState(location.state?.email || '');
    const [item, setitem] = useState(location.state?.item || '');

    useEffect(() => {
        if (location.state && location.state.id) {
            setSID(location.state.SID);
        }
    }, [location.state]);

    // Validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^\d{10}$/;

    // Validation functions
    const isValidEmail = (email) => emailRegex.test(email);
    const isValidTel = (tel) => telRegex.test(tel);

    function sendData(e) {
        e.preventDefault();

        // Validation checks
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidTel(tel)) {
            alert("Please enter a valid telephone number.");
            return;
        }

        const updatesupplier = {
            _id: id,
            SID: SID,
            companyName: companyName,
            companyid: companyid,
            tel: tel,
            address: address,
            city: city,
            country: country,
            email: email,
            item: item,
        };

        axios.put(`http://localhost:5001/Supplier/update/${id}`, updatesupplier)
            .then(() => {
                alert("Supplier Updated Successfully");
            })
            .catch((err) => {
                console.error(err);
                alert("Error updating Supplier");
            });
    }

    return (
        <body>
            <Headers />
            <main>
                <h1 className="savih1">Supplier(update)</h1>
                <div className="Slary_payment_container">
                    <form onSubmit={sendData}>
                        <div className="Prow1">
                            <input
                                type="text"
                                placeholder="SID"
                                className="Company_ID"
                                value={SID}
                                onChange={(e) => setSID(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="companyid"
                                className="Product_Name"
                                value={companyid}
                                onChange={(e) => setcompanyid(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="companyName"
                                className="Company_Name"
                                value={companyName}
                                onChange={(e) => setcompanyName(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">
                            <input
                                type="text"
                                placeholder="tel"
                                className="Product_ID"
                                value={tel}
                                onChange={(e) => settel(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="email"
                                className="Stock_Count"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="address"
                                className="Description"
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                            />
                        </div>
                        <div className="Prow2">
                            <input
                                type="text"
                                placeholder="city"
                                className="Description"
                                value={city}
                                onChange={(e) => setcity(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="country"
                                className="Description"
                                value={country}
                                onChange={(e) => setcountry(e.target.value)}
                            />
                            <div className="vehicletype">
                                <label>Items</label>
                                <select id="vehicletype" value={item} onChange={(e) => setitem(e.target.value)}>
                                    <option value="tires">Tires</option>
                                    <option value="tubes">Tubes</option>
                                    <option value="batteries">Batteries</option>
                                    <option value="spares">Spares</option>
                                </select>
                            </div>
                        </div>
                        <button id="Pbtn1">UPDATE</button>
                    </form>
                    <Link to='/Manager_Dashboard'>
                        <button type="submit" id="Pbtn2">Return</button>
                    </Link>
                </div>
            </main>
        </body>
    )
}
