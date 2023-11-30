 const mongoose = require("mongoose")
 const EmployeeSchema = mongoose.Schema({
     Employee_fname: {type: String,minlength: 3 },
     Employee_lname: {type: String,required:true},
     Employee_id   : {type: Number,required:true}
 })
 module.exports = mongoose.model("Employee",
 EmployeeSchema)