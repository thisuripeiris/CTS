
const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const ProductPaymentSchema = new Schema({
    User_Type:{
        type:String,
        required:true
    },
    Registered_ID:{
        type:String,
        required:false
    },
    Product_Name:{
        type:String,
        required:true
    },
    Product_ID:{
        type:String,
        required:true
    }, 
    Vehicle_Type:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Payment_Type:{
        type:String,
        required:true
    },
    Count:{
        type:String,
        required:true
    }
})

const Product_Payment = mongoose.model("Product_Payment",ProductPaymentSchema)

module.exports = Product_Payment;
