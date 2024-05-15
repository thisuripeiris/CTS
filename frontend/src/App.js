import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import AboutUs from "./Screens/AboutUs";
import Car from "./Screens/Vehicles/Car";
import ThreeWheel from "./Screens/Vehicles/ThreeWheel";
import Motorcycle from "./Screens/Vehicles/Motorcycle";
import { CartProvider } from "./Components/ContextReducer";
import Modal from "./Modal";
import Payment from "./Screens/Payment";


import Product_Payment from "./Components/Product_Payment";
import Employee_Salary_Payment from "./Components/Employee_Salary_Payment";
import Headers from "./Components/Staffheader";
import HRDashboard from "./Components/HR-Dashboard";
import VeiwSalary from "./Components/View_Employee_Salary_Payment";
import UpdateSalary from "./Components/More_View_Salary_payment";
import SalaryPDF from "./Components/Employee_Salary_Payment_PDF";
import Cashier_Dashboard from "./Components/Cashier/Cashier-Dashboard";
import Manager_Dashboard from "./Components/Manager/Manager-Dashboard";
import View_Product_Payment from "./Components/Cashier/View_Product_Payment";
import Service_Payment from "./Components/Cashier/Service_Payment";
import View_Service_Payment from "./Components/Cashier/View_Service_Payment";

import Stock_Payment from "./Components/Manager/Stock_Payment";
import ViewSalaryPayment from "./Components/Manager/View_Stock_Payment";

import Update_Stock_Payment from "./Components/Manager/Update_Stock_Payment";
import Update_Product_Payment from "./Components/Cashier/Update_Product_Payment";
import Update_Service_Payment from "./Components/Cashier/Update_Service_Payment";
import ISSUE from "./Components/Manager/ISSUE";
import View_salary_Issue from "./Components/Manager/View_Employee_Salary_ISSUE";
import MORE_VIEW_SLARY_ISSUE from "./Components/Manager/More_VIEW_Salary_ISSUE";
import View_salary_Delete_Issue from "./Components/Manager/VIEW_Salary_DELETE_ISSUE";
import View_Product_Issue from "./Components/Manager/View_Product_payment_iSSUE";
import Product_Update_Payment_ISSUE from "./Components/Manager/Update_Product_ISSUE";
import View_Product_Delete_Issue from "./Components/Manager/Product_payment_Delete_ISSUE";
import View_Service_Delete_Issue from "./Components/Manager/Service_Delete_ISSUE";
import View_Service_Issue from "./Components/Manager/View_Service_Payment_ISSUE";
import Udpate_Service_ISSUE from "./Components/Manager/More_Service_Payment_ISSUE";
import ViewSuppliers from "./Components/Manager/Supplier_view";
import AddSupplier from "./Components/Manager/Add_Supplier";
import Update_Supplier from "./Components/Manager/Update_Supplier";
import Admin_Dashboard from "./Components/Admin/Admin-Dashboard";
import ViewCustomers from "./Components/Admin/Customer_view";
import ASuplierView from "./Components/Admin/ASup_view";
import Employee from "./Components/Admin/Employee_view";
import AddEmployee from "./Components/Admin/Add_Employee";
import Update_Employee from "./Components/Admin/Update_Employee";
import Add_Employer from "./Components/Admin/Employer_add";
import Update_Employer from "./Components/Admin/Update_Employer";
import Employer from "./Components/Admin/Employer_view";

import Signup from "./Components/Signup";
import Update_Profile from "./Screens/EditProfile";
import ProfileView from "./Components/Profile";
import StaffLogon from "./Screens/Login";




function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            {/* <Route exact path="/myOrders" element={<MyOrders />} /> */}
            <Route exact path="/Car" element={<Car />} />
            <Route exact path="/ThreeWheel" element={<ThreeWheel />} />
            <Route exact path="/Motorcycle" element={<Motorcycle />} />
            <Route exact path="/Cart" element={<Modal />} />
            <Route path="/payment" element={<Payment />} />

            <Route path='/StaffLogin' element={<StaffLogon />} />
            <Route path='/Product_Payment' element={<Product_Payment />} />
            <Route path='/Employee_Salary_Payment' element={<Employee_Salary_Payment />} />
            <Route path='/Headers' element={<Headers />} />
            <Route path='/HRDashboard' element={<HRDashboard />} />
            <Route path='/VeiwSalary' element={<VeiwSalary />} />
            <Route path='/UpdateSalary' element={<UpdateSalary />} />
            <Route path='/SalaryPDF' element={<SalaryPDF />} />
            <Route path='/Cashier_Dashboard' element={<Cashier_Dashboard />} />
            <Route path='/Manager_Dashboard' element={<Manager_Dashboard />} />
            <Route path='/View_Product_Payment' element={<View_Product_Payment />} />
            <Route path='/Service_Payment' element={<Service_Payment />} />
            <Route path='/View_Service_Payment' element={<View_Service_Payment />} />
            <Route path='/Stock_Payment' element={<Stock_Payment />} />
            <Route path='/ViewSalaryPayment' element={<ViewSalaryPayment />} />
            <Route path='/Update_Stock_Payment' element={<Update_Stock_Payment />} />
            <Route path='/Update_Product_Payment' element={<Update_Product_Payment />} />
            <Route path='/Update_Service_Payment' element={<Update_Service_Payment />} />
            <Route path='/ISSUE' element={<ISSUE />} />
            <Route path='/View_salary_Issue' element={<View_salary_Issue />} />
            <Route path='/MORE_VIEW_SLARY_ISSUE' element={<MORE_VIEW_SLARY_ISSUE />} />
            <Route path='/View_salary_Delete_Issue' element={<View_salary_Delete_Issue />} />
            <Route path='/View_Product_Issue' element={<View_Product_Issue />} />
            <Route path='/Product_Update_Payment_ISSUE' element={<Product_Update_Payment_ISSUE />} />
            <Route path='/View_Product_Delete_Issue' element={<View_Product_Delete_Issue />} />
            <Route path='/View_Service_Delete_Issue' element={<View_Service_Delete_Issue />} />
            <Route path='/View_Service_Issue' element={<View_Service_Issue />} />
            <Route path='/Udpate_Service_ISSUE' element={<Udpate_Service_ISSUE />} />
            <Route path='/ViewSuppliers' element={<ViewSuppliers />} />
            <Route path='/AddSupplier' element={<AddSupplier />} />
            <Route path='/Update_Supplier' element={<Update_Supplier />} />
            <Route path='/Admin_Dashboard' element={<Admin_Dashboard />} />
            <Route path='/ViewCustomers' element={<ViewCustomers />} />
            <Route path='/ASuplierView' element={<ASuplierView />} />
            <Route path='/Employee' element={<Employee />} />
            <Route path='/AddEmployee' element={<AddEmployee />} />
            <Route path='/Update_Employee' element={<Update_Employee />} />
            <Route path='/AddEmployer' element={<Add_Employer />} />
            <Route path='/Update_Employer' element={<Update_Employer />} />
            <Route path='/Employer' element={<Employer />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Employer' element={<Employer />} />
            <Route path='/Update_Profile' element={<Update_Profile />} />
            <Route path='/ProfileView' element={<ProfileView />} />



          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
