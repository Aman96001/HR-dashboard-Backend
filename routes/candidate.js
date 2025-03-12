const express = require('express');
const { 
    addCandidates, 
    getCandidates, 
    updateCandidate, 
    deleteCandidate 
} = require('../controllers/candidateController'); // Corrected import

const router = express.Router();

// Define candidate-related routes
router.post('/addCandidates', addCandidates); // Create a new candidate
router.get('/getCandidates', getCandidates); // Get all candidates
router.put('/update/:id', updateCandidate); // Update candidate details
router.delete('/delete/:id', deleteCandidate); // Delete a candidate

module.exports = router;
