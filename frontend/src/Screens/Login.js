
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Add this line
import "../Components/CSS/Login.css";
import axios from "axios";
import { useUser } from './Customer_context';
// import Navbar from "./Navbar";

const StaffLogon = () => {
  const [password, setPassword] = useState("");
  const { email, setEmail } = useUser();
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password
    };

    axios.post(`http://localhost:5001/Customer/LOG`, newUser)
      .then((res) => {
        if (res.data.status === "exist") {
          navigate("/Home", { state: { id: email } }); // Fix: navigate instead of
          ;
        }
      }

      )
      .catch((err) => {
        console.error(err);
        alert("Error logging in"); // Display error message
      });
  }

  return (
    <div>
      {/* <Navbar/> */}
      <div className='login'>
        <h1 className='login-h1'>Continental Tyre Services Management System</h1>
        <div className="Staff-Login-Container">
          <div className="Staff-Login-Side1">
            {/* <img src={backgroundImg} alt="Background"/> */}
            <h2 id='login-h2'>Login</h2>
          </div>
          <div className="Staff-Login-Side2">
            <form onSubmit={sendData}>
              <input type='email' name='Email' placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type='password' name='Password' placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit' id='login-button' >Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/Signup">Signup</Link> {/* Corrected 'Don't' */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffLogon;
