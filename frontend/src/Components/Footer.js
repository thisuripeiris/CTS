import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-light border-top p-3">
      <div className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item"><Link to="/" className="nav-link text-muted">Home</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link text-muted">Features</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link text-muted">FAQs</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link text-muted">About</Link></li>
        </ul>
        <p className="text-center text-muted">© 2024 Company, Inc</p>
      </div>
    </footer>
  )
}
