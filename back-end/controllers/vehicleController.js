const Vehicle = require('../models/vehicleModel');

// get all vehicles
const getVehicles = async(req,res) =>{
    const vehicles = await Vehicle.find({}).sort({createdAt: -1})
    res.status(200).json(vehicles);
}

// get a single vehicle
const getVehicle = async(req,res) =>{
    const {id} = req.params;

    const vehicle = await Vehicle.findById(id);

    if(!vehicle) return res.status(404).json({err:"The vehicle with the given ID was not found!!"})

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
    res.status(400).json({err: err.message})
  }
}
// delete a vehicle


// update a vehicle

module.export = {
    getVehicle,
    getVehicles,
    createVehicle
}