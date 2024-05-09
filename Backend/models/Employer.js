const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployerSchema = new Schema({

    Employer_ID:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Position:{
        type:String,
        required:true
    }
   
   
})

const Employer = mongoose.model("Employer", EmployerSchema);

module.exports=Employer;