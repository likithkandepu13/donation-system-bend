const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  receiveUpdates: {
    type: Boolean,
    default: false
  }
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
