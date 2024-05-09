
import React, { useState, useEffect } from 'react';
import Headers from '../Staffheader';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";


export default function Update_Stock_Payment() {


  const location = useLocation();
  const [id, setId] = useState(location.state?.id || '');
  const [Company_ID, setCompany_ID] = useState(location.state?.Company_ID || '');
  const [Company_Name, setCompany_Name] = useState(location.state?.Company_Name || '');
  const [Product_Name, setProduct_Name] = useState(location.state?.Product_Name || '');
  const [Product_ID, setProduct_ID] = useState(location.state?.Product_ID || '');
  const [Date, setDate] = useState(location.state?.Date || '');
  const [Stock_Count, setStock_Count] = useState(location.state?.Date || ''); // State to hold the date
  const [Stock_Price, setStock_Price] = useState(location.state?.Stock_Price || '');
  const [Vehicle_Type, setvehicletype] = useState(location.state?.Vehicle_Type || '');
  const [Description, setDescription] = useState(location.state?.Description || '');

  useEffect(() => {
    if (location.state && location.state.Company_ID) {
      setCompany_ID(location.state.RICompany_IDD);
    }

  }, [location.state]);

  console.log("My Employee ID is " + Date);
  function sendData(e) {
    e.preventDefault();

    const updatesalary = {
      _id: id,
      Company_ID: Company_ID,
      Company_Name: Company_Name,
      Product_ID: Product_ID,
      Product_Name: Product_Name,
      Date: Date,
      Stock_count: Stock_Count,
      Stock_Price: Stock_Price,
      Vehicle_Type: Vehicle_Type,
      Description: Description,

    };

    axios.put(`http://localhost:5001/Stock_Payment/update/${id}`, updatesalary) // Fix: Use put method and lowercase update
      .then(() => {
        alert("Stock Payment Update Successfully");
      })
      .catch((err) => {
        console.error(err); // Fix: Change alert to console.error for better debugging
        alert("Error updating Stock Payment"); // Fix: Change alert message
      });
  }



  return (

    <body>
      <Headers />

      <main>
        <h1 className="savih1">Supplier Payment</h1>
        <div className="Slary_payment_container">
          <form onSubmit={sendData}>
            <div className="Prow1">
              <input
                type="text"
                placeholder="Company ID"
                className="Company_ID"
                value={Company_ID}
                onChange={(e) => setCompany_ID(e.target.value)}
              />
              <input
                type="text"
                placeholder="Company Name"
                className="Company_Name"
                value={Company_Name}
                onChange={(e) => setCompany_Name(e.target.value)}
              />
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
                placeholder="Product ID"
                className="Product_ID"
                value={Product_ID}
                onChange={(e) => setProduct_ID(e.target.value)}
              />
            </div>
            <div className="Prow3">
              <input
                type="date"
                placeholder="Date"
                className="Date"
                value={Date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="Stock Count"
                className="Stock_Count"
                value={Stock_Count}
                onChange={(e) => setStock_Count(e.target.value)}
              />
            </div>
            <div className="Prow4">
              <input
                type="text"
                placeholder="Stock Price"
                className="Stock_Price"
                value={Stock_Price}
                onChange={(e) => setStock_Price(e.target.value)}
              />
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
            <div className="Prow5" style={{ display: "block" }}>
              <input
                type="text"
                placeholder="Description"
                className="Description"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
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