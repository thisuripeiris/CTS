import React, { useState } from 'react';
import Modal from '../../Modal';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Cart from './Cart';
import { useCart } from '../ContextReducer';

const Navbar = ({ isLoggedIn, email, logout }) => {

  let data = useCart();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/Home">
          CTS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myOrders">
                My Orders
              </Link>
            </li>
          </ul>

        </div>


        <div>
          {/* Conditionally render Profile and Logout buttons */}
          {isLoggedIn && (
            <div className="d-flex align-items-center">
              <Link to={{ pathname: "/ProfileView", state: { id: isLoggedIn, email: email } }} className="nav-link me-2">
                <button className="btn btn-secondary">Profile</button>
              </Link>
              <button className="btn btn-danger me-2" onClick={logout}>Logout</button>
            </div>
          )}
          {/* Cart Link */}
          <button className="btn btn-outline-light position-relative" onClick={openModal}>
            <i className="bi bi-cart-fill"></i>
            {data.length > 0 && (
              <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                {data.length}
              </Badge>
            )}
          </button>
        </div>
      </div>

      {/* Render Modal based on modalOpen state */}
      {modalOpen && <Modal onClose={closeModal}><Cart /></Modal>}
    </nav>
  );
};

export default Navbar;
