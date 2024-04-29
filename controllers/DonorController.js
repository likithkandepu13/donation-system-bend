const { response } = require('express')
const Donor = require ('../models/Donator')
const Contact = require('../models/Contact')

const insertdonor = async (request,response) => {
    try{
        const input = request.body;
        const donor = new Donor(input);
        await donor.save();
        response.send('Registered Successfully !')
    }
    catch(e){
        response.status(500).send(e.message)
    }
}

const insertcontact = async (request,response) => {
    try{
        const input = request.body;
        const contact = new Contact(input)
        await contact.save()
        response.send("Contact Us Saved Successfully!")

    }
    catch(e)
    {
        response.status(500).send(e.message)
    }
}

const checkdonorlogin = async (request,response) =>
{
    try{
        const input = request.body
        console.log(input)
        const donor = await Donor.findOne(input)
        response.json(donor)
    }
    catch(e)
    {
        response.status(500).send(e.message)

    }
}

module.exports = { insertdonor , checkdonorlogin ,insertcontact}