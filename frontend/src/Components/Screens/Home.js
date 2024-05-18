

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from '../Footer'
import Carousal from '../Carousal'
import Vehicle from '../VehicleBar'
import FeedbackCarousel from "../feedbackCarousel";
import AboutUsPage from "./AboutUs";
// import "../CSS/Home.css"



export default function Home() {
  const location = useLocation();
  const email = location.state && location.state.id;

  // State to store customer details
  const [customer, setCustomer] = useState(null);

  // Fetch customer details when component mounts
  useEffect(() => {
    if (email) {
      fetchCustomer(email);
    }
  }, [email]);

  const fetchCustomer = (email) => {
    axios.get(`http://localhost:8000/Customer/get/${email}`)
      .then((res) => {
        console.log(res.data);
        setCustomer(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  console.log(email);

  return (
    <div>
      {/* Assuming you have Headers component */}

      <main>

        {/* Render profile button only if customer details are fetched */}
        {customer && (
          <div className="profile-section">
            <p>Welcome,  {email}</p>
            <Link to="/ProfileView" state={{ id: customer._id, email: email }}>
              <button className="custom-profile-button">Profile</button>
            </Link>
          </div>
        )}
        <div><Navbar /></div>
        <div><Carousal /></div>
        <div><Vehicle /></div>
        {/* <div><FeedbackCarousel /></div> */}
        <div><AboutUsPage /></div>
        <div><Footer /></div>
      </main>


    </div>
  );
}