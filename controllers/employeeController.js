
const Employee = require("../model/employee");


const addEmployee = async (req, res) => {
  try {
      const { email, phone } = req.body;

      // Check if employee already exists
      const existingEmployee = await Employee.findOne({
          $or: [{ email }, { phone }]
      });

      if (existingEmployee) {
          return res.status(400).json({ error: "Employee with this email or phone already exists" });
      }

      // create new employee
      const newEmployee = new Employee(req.body);
      await newEmployee.save();

      res.status(201).json({ message: "Employee added successfully", newEmployee });

  } catch (error) {
      console.error("Error adding employee:", error);
      res.status(500).json({ error: "Failed to add employee" });
  }
};

  // Get Employees
  const getEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch employees" });
    }
  };

  //delete Employee
  const deleteEmployee = async (req, res) => {
    try {
      const { id } = req.params;

      const deletedEmployee = await Employee.findByIdAndDelete(id);

      if (!deletedEmployee) {
        return res.status(404).json({ error: "Employee not found" });
      }

      res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
      console.error("Error deleting employee:", error);
      res.status(500).json({ error: "Failed to delete employee" });
    }
  };
  
  module.exports = {
    addEmployee,
    getEmployees,
    deleteEmployee,
    
 }