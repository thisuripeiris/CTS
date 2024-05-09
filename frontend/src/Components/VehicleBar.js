import React from 'react';
import { Link } from 'react-router-dom';
import carImg from './Images/car.png'
// import bikeImg from './Images/bike.png'
import threewheelImg from './Images/3-wheel.png'
import motorbicycleImg from './Images/motorbicycle.png'
import './CSS/Vehicle.css'



const Vehicle = () => {
  return (
    <div className="container">
      <div className="row vehicleRow">
        <div className="col-md-1 mb-3 vehicleImg">
          <Link to="/Car">
            <img src={carImg} alt="Car" className="img-fluid vehicle" />
          </Link>
        </div>
        {/* <div className="col-md-1 mb-3 vehicleImg">
          <Link to="/Bike">
            <img src={bikeImg} alt="Bike" className="img-fluid vehicle" />
          </Link>
        </div> */}
        <div className="col-md-1 mb-3 vehicleImg">
          <Link to="/Motorcycle">
            <img src={motorbicycleImg} alt="motorcycle" className="img-fluid vehicle" />
          </Link>
        </div>
        <div className="col-md-1 mb-3 vehicleImg">
          <Link to="/Threewheel">
            <img src={threewheelImg} alt="3-Wheel" className="img-fluid vehicle" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Vehicle;
