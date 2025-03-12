const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  department: { type: String, default: "HR" },
  date: { type: String, default: Date.now },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
