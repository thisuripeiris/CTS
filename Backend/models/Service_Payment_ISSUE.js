
const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const ServicePaymentSchema = new Schema({
    ID:{
        type:String,
        required:true
    },
    User_Type:{
        type:String,
        required:true
    },
    Registered_ID:{
        type:String,
        required:false
    },
    Service_Type:{
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
    ISSUE:{
        type:String,
        required:true
    }
    
})

const Service_Payment = mongoose.model("Service_Payment_ISSUE",ServicePaymentSchema)

module.exports = Service_Payment;
