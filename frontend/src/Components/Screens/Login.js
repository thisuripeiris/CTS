
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../CSS/Login.css";
import axios from "axios";
import { useUser } from './Customer_context';

const StaffLogon = () => {
  const [password, setPassword] = useState("");
  const { email, setEmail } = useUser();
  const [loginMessage, setLoginMessage] = useState(""); // State for login message
  const [isSuccess, setIsSuccess] = useState(false); // State for login status
  const [emailError, setEmailError] = useState(""); // State for email error
  const [passwordError, setPasswordError] = useState(""); // State for password error
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    // Validate email and password
    let valid = true;
    if (!email) {
      setEmailError("Please enter your email.");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Please enter your password.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) {
      return;
    }

    const newUser = {
      email: email,
      password: password
    };

    axios.post(`http://localhost:8000/Customer/LOG`, newUser)
      .then((res) => {
        if (res.data.status === "exist") {
          setLoginMessage("Login successful!");
          setIsSuccess(true);
          navigate("/Home", { state: { id: email } });
        } else {
          setLoginMessage("Invalid email or password.");
          setIsSuccess(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoginMessage("Error logging in.");
        setIsSuccess(false);
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
              <input
                type='email'
                name='Email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
              {emailError && <div className="alert alert-danger mt-2">{emailError}</div>}
              <input
                type='password'
                name='Password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
              {passwordError && <div className="alert alert-danger mt-2">{passwordError}</div>}
              <button type='submit' id='login-button' className="btn btn-primary">Login</button>
            </form>
            {loginMessage && (
              <div className={`mt-3 ${isSuccess ? "alert alert-success" : "alert alert-danger"}`} role="alert">
                {loginMessage}
              </div>
            )}
            <p className="mt-3">
              Don't have an account? <Link to="/Signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffLogon;
