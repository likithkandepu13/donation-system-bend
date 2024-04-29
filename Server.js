const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()

// const dburl = "mongodb+srv://madaladevendra16:admin@cluster0.4ntliph.mongodb.net/donationsystem"
const dburl = process.env.mongodburl
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message) 
});

const app = express() 
app.use(cors())
app.use(express.json()) 

const donorrouter = require("./routes/donorroute")
const adminrouter = require('./routes/adminroutes')
const transrouter = require('./routes/transroute');

app.use("",donorrouter)
app.use("",adminrouter)
app.use("",transrouter)


const port = 2024
app.listen( port, () =>{
    console.log(`Server is Running at ${port}`)
})