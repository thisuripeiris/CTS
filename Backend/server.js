const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");


// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

// Routes
const EmployeeSalaryRoute = require("./routes/Salary_route");
app.use("/Salary", EmployeeSalaryRoute);

const Supplierpayment = require("./routes/Supplier_Payment_Route");
app.use("/Stock_Payment", Supplierpayment);

const ServicePayment = require("./routes/Service_Payment_route");
app.use("/Service_Payment", ServicePayment)

const ProductPayment = require("./routes/Product_Payment_route");
app.use("/Product_Payment", ProductPayment)

const ISSUESalary = require("./routes/Employee_Salary_Issue_route");
app.use("/Salary_ISSUE", ISSUESalary)

const DELETEISSUESalary = require("./routes/Employee_Salary_Delete_Issue");
app.use("/Salary_Delete_ISSUE", DELETEISSUESalary)

const ProductPaymentISSUEE = require("./routes/Product_Payment_ISSUE_Route");
app.use("/Product_Payment_ISSUE", ProductPaymentISSUEE)

const ServicePaymentISSUEE = require("./routes/Service_Payment_ISSUE_Route");
app.use("/Service_Payment_ISSUE", ServicePaymentISSUEE)

const DELETEISSUEProduct = require("./routes/Product_Payment_Delete_ISSUE");
app.use("/Product_Delete_ISSUE", DELETEISSUEProduct)

const DELETEISSUEService = require("./routes/Service_Payment_Delete");
app.use("/Service_Delete_ISSUE", DELETEISSUEService)

const Employee = require("./routes/Employee_route");
app.use("/Employee", Employee)

const Customer = require("./routes/Customer_route");
app.use("/Customer", Customer)

const Supplier = require("./routes/Supplier_route");
app.use("/Supplier", Supplier)

const Employer = require("./routes/Employer_route");
app.use("/Employer", Employer)



const productRoute = require("./routes/Products_route");
const productTypeRoute = require("./routes/productType_route");
const vehicleTypeRoute = require("./routes/vehicleType_route");
const orderRoute = require("./routes/OrderData_route");

app.use("/Product", productRoute);
app.use("/ProductType", productTypeRoute);
app.use("/VehicleType", vehicleTypeRoute);
app.use("/orderData", orderRoute);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

connection.on('error', (err) => {
  console.error('MongoDB connection error: ', err);
});



// Root route handler
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
