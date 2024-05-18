import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from "./Components/Screens/Home";
import AboutUs from "./Components/Screens/AboutUs";
import Car from "./Components/Screens/Vehicles/Car";
import ThreeWheel from "./Components/Screens/Vehicles/ThreeWheel";
import Motorcycle from "./Components/Screens/Vehicles/Motorcycle";
import { CartProvider } from "./Components/ContextReducer";
import Modal from "./Modal";
import ProfileView from "./Components/Screens/Profile";
import Update_Profile from "./Components/Screens/EditProfile";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Signup";
import Payment from "./Components/Screens/Payment";
import MyOrders from "./Components/Screens/MyOrders";
import OperationsManagerDashboard from "./Components/OperationManager/OperationsManagerDashboard";






function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/myOrders" element={<MyOrders />} />
            <Route exact path="/Car" element={<Car />} />
            <Route exact path="/ThreeWheel" element={<ThreeWheel />} />
            <Route exact path="/Motorcycle" element={<Motorcycle />} />
            <Route exact path="/Cart" element={<Modal />} />
            <Route path="/payment" element={<Payment />} />

            <Route path="/OperationsManagerDashboard" element={<OperationsManagerDashboard />} />



            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Update_Profile' element={<Update_Profile />} />
            <Route path='/ProfileView' element={<ProfileView />} />



          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
