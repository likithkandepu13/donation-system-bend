const mongoose = require('mongoose');

const citizenContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  problem: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('CitizenContact', citizenContactSchema);

module.exports = Contact;
