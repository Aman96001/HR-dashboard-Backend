const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Candidate = require("../model/candidates");

// Add a new candidate
const addCandidates = async (req, res) => {
  try {
    const { fullName, email, phone, position, experience, date } = req.body;

    // Check if all fields are provided
    if (!fullName || !email || !phone || !position || !experience || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if a candidate with the same email or phone already exists
    const existingCandidate = await Candidate.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingCandidate) {
      return res.status(400).json({
        message: "Candidate with this email or phone number already exists",
      });
    }

    // Create a new candidate
    const newCandidate = new Candidate({
      fullName,
      email,
      phone,
      position,
      experience,
      date,
    });

    await newCandidate.save();

    return res.status(201).json({
      message: "Candidate added successfully",
      candidate: newCandidate,
    });
  } catch (error) {
    console.error("Error adding candidate:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};


// Get all candidates
// Get all candidates with search by name and position functionality
const getCandidates = async (req, res) => {
  try {
    const { search } = req.query;

    let query = {};

    if (search) {
      query = {
        $or: [
          { fullName: { $regex: search, $options: "i" } }, // Search by Name
          { position: { $regex: search, $options: "i" } }, // Search by Position
        ],
      };
    }

    const candidates = await Candidate.find(query);
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a candidate
const updateCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCandidate = await Candidate.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedCandidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json(updatedCandidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a candidate
const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCandidate = await Candidate.findByIdAndDelete(id);

    if (!deletedCandidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json({ message: "Candidate deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export all functions correctly
module.exports = {
  addCandidates,
  getCandidates,
  updateCandidate,
  deleteCandidate,
};
