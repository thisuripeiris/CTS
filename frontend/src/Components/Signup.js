
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CSS/signup.css"; // Import your CSS file for styling

export default function CustomSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [telError, setTelError] = useState("");
  const [emailError, setEmailError] = useState("");

  function validateEmail(email) {
    // Regular expression for validating email addresses
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateTel(tel) {
    // Regular expression for validating phone numbers
    const re = /^[0-9]{10}$/;
    return re.test(String(tel));
  }

  function sendData(e) {
    e.preventDefault();

    // Validate telephone and email
    if (!validateTel(tel)) {
      setTelError("Please enter a valid telephone number");
      return;
    } else {
      setTelError("");
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    const newCustomer = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      tel: tel,
      email: email,
      address: address,
      city: city,
    };
    axios
      .post("http://localhost:5001/Customer/Add", newCustomer)
      .then(() => {
        alert("Customer Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className='custom-signup'>
      <h1 className="custom-signup-heading">Sign Up</h1>
      <div className="custom-signup-container">
        <form onSubmit={sendData}>
          <div className="custom-form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="custom-form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
            {telError && <span className="error-message">{telError}</span>}
          </div>
          <div className="custom-form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
          <div className="custom-form-group">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
}
