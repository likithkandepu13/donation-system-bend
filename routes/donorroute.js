// donorroute.js

const express = require('express');
const donorcontroller = require('../controllers/DonorController');

const donorrouter = express.Router();

donorrouter.post("/insertdonor", donorcontroller.insertdonor);
donorrouter.post("/checkdonor", donorcontroller.checkdonorlogin);
donorrouter.post("/insertcontact", donorcontroller.insertcontact); // Add this line for insertcontact

module.exports = donorrouter;
