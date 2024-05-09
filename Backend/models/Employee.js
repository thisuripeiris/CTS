const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({

  RID:{
    type:String,
    required:true
  }, 
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  NIC: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  basicsal: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  employee_type: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: false
  },
  
});

const Employee = mongoose.model("Employee",EmployeeSchema)

module.exports =Employee;

//module.exports = mongoose.model('Employer', EmployerSchema);