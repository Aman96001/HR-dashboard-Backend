const Leave = require("../model/grantLeave");

// Store Leave Data in Database
 const grantLeave = async (req, res) => {
  try {
    const { fullName, employeeEmail, leaveDate, reason } = req.body;

    // Create and Save Leave Request
    const newLeave = new Leave({ fullName, employeeEmail, leaveDate, reason  });
    await newLeave.save();

    res.status(201).json({ message: "Leave request submitted successfully", leave: newLeave });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Leave Requests
const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
    grantLeave,
    getLeaves,
    
 }
