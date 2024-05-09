const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const EmployeeSalarySchema = new Schema({

    RID:{
        type:String,
        required:true
    },
    First_Name:{
        type:String,
        required:true
    },
    Last_Name:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Amount:{
        type:String,
        required:true
    },
    Payment_Type:{
        type:String,
        required:true
    },
    Payment_Month:{
        type:String,
        required:false
    },
    Payment_Day:{
        type:String,
        required:false
    },
    Date:{
        type:String,
        required:true
    }
   
})

const Salary = mongoose.model("Employee_Salary", EmployeeSalarySchema);

module.exports = Salary;
