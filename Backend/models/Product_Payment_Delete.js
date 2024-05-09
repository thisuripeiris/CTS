const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const EmployeeSalarySchema = new Schema({
    ID:{
        type:String,
        required:true
    },
    Issue:{
        type:String,
        required:true
    }

   
})

const Salary = mongoose.model("Product_Payment_Delete_Issue", EmployeeSalarySchema);

module.exports = Salary;