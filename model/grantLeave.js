
const mongoose = require("mongoose");


const leaveSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  employeeEmail: { type: String, required: true },
  leaveDate: { type: Date, required: true },
  reason: { type: String, required: true },
});

const Leave = mongoose.model("Leave", leaveSchema);

 module.exports= Leave;
