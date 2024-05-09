const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({

  SID:{
    type:String,
    required:true
  }, 
  companyName: {
    type: String,
    required: true
  },
  companyid: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
});

const Supplier = mongoose.model("Supplier",SupplierSchema)

module.exports =Supplier;

// module.exports = mongoose.model('Supplier', SupplierSchema);