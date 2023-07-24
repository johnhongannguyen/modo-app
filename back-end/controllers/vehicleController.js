const Vehicle = require('../models/vehicleModel');
const mongoose = require('mongoose');

// get all vehicles
const getVehicles = async(req,res) =>{

   
    const vehicles = await Vehicle.find({}).sort({createdAt: -1})
    res.status(200).json(vehicles);
}

// get a single vehicle
const getVehicle = async(req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:'Not found ID'});
    const vehicle = await Vehicle.findById(id);

    if(!vehicle) return res.status(404).json({error:"The vehicle with the given ID was not found!!"})

    res.status(200).json(vehicle);
   
}

// create new vehicle
const createVehicle = async(req,res) =>{
    const {make,model,year,colour,location_id,location_description} = req.body

    // add doc to db
  try{
   
    const vehicle = await Vehicle.create({make,model,year,colour,location_id,location_description})
    res.status(200).json(vehicle)
  }catch(err){
    res.status(400).json({error: error.message})
  }
}
// delete a vehicle
const deleteVehicle = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:'Not found ID'});
    const vehicle = await Vehicle.findByIdAndRemove({_id:id});

    if(!vehicle) return res.status(404).json({error : 'Not found ID'});

    res.status(200).json(vehicle);
}

// update a vehicle
const updateVehicle = async(req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:'Not found ID'});
    const vehicle = await Vehicle.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    if(!vehicle) return res.status(404).json({error: "Not found ID"});

    res.status(200).json(vehicle);

}
module.exports = {
    getVehicle,
    getVehicles,
    createVehicle,
    deleteVehicle,
    updateVehicle
}