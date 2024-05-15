import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useUser } from './Customer_context';
import "../Components/CSS/Login.css";

const StaffLogon = () => {
  const [password, setPassword] = useState("");
  const { email, setEmail } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(""); // State for error handling

  function sendData(e) {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password
    };

    axios.post(`http://localhost:5001/Customer/LOG`, newUser)
      .then((res) => {
        if (res.data.status === "exist") {
          navigate("/Home", { state: { id: email } });
        } else {
          setError("User does not exist"); // Set error message if user doesn't exist
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error logging in"); // Set error message for other errors
      });
  }

  return (
    <div className='login'>
      <h1 className='login-h1'>Continental Tyre Services Management System</h1>
      <div className="Staff-Login-Container">
        <div className="Staff-Login-Side1">
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
            <button type='submit' id='login-button'>Login</button>
          </form>
          {error && <p>{error}</p>} {/* Display error message if error state is set */}
          <p>
            Don't have an account? <Link to="/Signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffLogon;
