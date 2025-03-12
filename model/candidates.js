const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Candidates', candidateSchema);
