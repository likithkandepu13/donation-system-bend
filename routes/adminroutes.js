const express = require('express');
const admincontroller = require('../controllers/AdminController');
const adminrouter = express.Router();

adminrouter.get("/viewdonors", admincontroller.viewdonors);
adminrouter.delete("/deletedonors/:email", admincontroller.deletedonor);
adminrouter.post("/checkadminlogin", admincontroller.checkadminlogin);
adminrouter.get("/viewcontact",admincontroller.viewcontact);

module.exports = adminrouter;
