const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");


// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

// Routes
const Customer = require("./routes/Customer_route");
app.use("/Customer", Customer)

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
