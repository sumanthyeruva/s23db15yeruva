 const mongoose = require("mongoose")
 const EmployeeSchema = mongoose.Schema({
     Employee_fname: String,
     Employee_lname: String,
     Employee_id   : Number
 })
 module.exports = mongoose.model("Employee",
 EmployeeSchema)