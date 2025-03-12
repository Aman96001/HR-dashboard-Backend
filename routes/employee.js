const express = require("express");
const { addEmployee, getEmployees,deleteEmployee } = require("../controllers/employeeController");

const router = express.Router();

router.post("/addEmployee", addEmployee); // Add new employee
router.get("/getEmployees", getEmployees); // Get all employees
router.delete("/deleteEmployee/:id", deleteEmployee); // Delete employee
module.exports = router;
