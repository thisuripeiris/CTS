import React from 'react';
import VehicleBar from '../../../Components/VehicleBar'
import Navbar from '../Navbar';
import ProductCards from '../../../Components/ProductCards';

export default function Car() {

  return (
    <div>
      <Navbar />
      <VehicleBar />
      <ProductCards vehicleType="car" />

    </div>
  );
}
