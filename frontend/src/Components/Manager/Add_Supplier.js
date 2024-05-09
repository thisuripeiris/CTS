

import "../CSS/Product_Payment.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Headers from "../Staffheader";

export default function Add_Supplier() {
  const [SID, setSID] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [companyid, setcompanyid] = useState("");
  const [tel, settel] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [item, setitem] = useState("");

  function isValidEmail(email) {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidTelephone(tel) {
    // Basic telephone number validation regex
    return /^[0-9]{10}$/.test(tel);
  }

  function sendData(e) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!isValidTelephone(tel)) {
      alert("Please enter a valid telephone number (10 digits only).");
      return;
    }
    const newsupplier = {
      SID: SID,
      companyName: companyName,
      companyid: companyid,
      tel: tel,
      email: email,
      address: address,
      city: city,
      country: country,
      item: item
    };
    axios
      .post("http://localhost:5001/Supplier/Add", newsupplier)
      .then(() => {
        alert("Supplier Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <body>
      <Headers />
      <main>
        <h1 className="savih1">Add Supplier</h1>
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
                className="Company_Name"
                value={companyid}
                onChange={(e) => setcompanyid(e.target.value)}
              />
              <input
                type="text"
                placeholder="companyName"
                className="Company_ID"
                value={companyName}
                onChange={(e) => setcompanyName(e.target.value)}
              />
            </div>
            <div className="Prow2">
              <input
                type="text"
                placeholder="tel"
                className="Product_Name"
                value={tel}
                onChange={(e) => settel(e.target.value)}
              />
              <input
                type="text"
                placeholder="email"
                className="Product_ID"
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
                <select
                  id="vehicletype"
                  value={item}
                  onChange={(e) => setitem(e.target.value)}
                >
                  <option value="-">-</option>
                  <option value="tires">Tires</option>
                  <option value="tubes">Tubes</option>
                  <option value="batteries">Batteries</option>
                  <option value="spares">Spares</option>
                </select>
              </div>
            </div>
            <button id="Pbtn1">ADD</button>
          </form>
          <Link to="/ViewSuppliers">
            <button type="submit" id="Pbtn2">
              Return
            </button>
          </Link>
        </div>
      </main>
    </body>
  );
}
