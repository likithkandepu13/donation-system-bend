const { response, request } = require('express');
const Donor = require('../models/Donator')
const Admin = require('../models/Admin')
const Contact = require('../models/Contact')

const viewdonors = async (request , response) =>
{
    try{
        const donor = await Donor.find()
        if(donor.length == 0)
        {
            response.send(" Data not found")
        }
        else{
            response.json(donor);
        }
    }
    catch(e){
        response.status(500).send(e.message)

    }
}

const viewcontact = async ( request,response) =>
{
    try{
        const contact = await Contact.find()
        if(contact.length == 0)
        {
            response.send(" Data not found")
        }
        else{
            response.json(contact);
        }
    }
    catch(e){
        response.status(500).send(e.message)

    }

}

const deletedonor = async (request , response) =>{
    try{
        const email = request.params.email
        const donor = await Donor.findOne({"email":email})
        if(donor)
        {
            await Donor.deleteOne({"email":email})
            response.send("Deleted Successfully ")
        }
        else{
            response.send("Email Id Not Found")
        }

    }
    catch(e)
    {
        response.status(500).send(e.message)
    }
}

const checkadminlogin = async (request,response) =>{

    try{
        const input = request.body
        console.log(input)
        const admin = await Admin.findOne(input)
        response.json(admin)

    }
    catch(e)
    {
        response.status(500).send(e.message)

    }
}


module.exports = { viewdonors,deletedonor,checkadminlogin,viewcontact}