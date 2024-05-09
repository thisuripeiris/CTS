
const mongoose = require(`mongoose`);

const Schema =mongoose.Schema;

const SupplierPaymentSchema = new Schema({

    Company_ID:{
        type:String,
        required:true  
    },
    Company_Name:{
        type:String,
        required:true
    },
    Product_ID:{
        type:String,
        required:true
    },
    Product_Name:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Stock_count:{
        type:String,
        required:true
    },
    Stock_Price:{
        type:String,
        required:true
    },
    Vehicle_Type:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }

})

const Stock_Payment = mongoose.model("Stock_Payment",SupplierPaymentSchema)

module.exports = Stock_Payment;