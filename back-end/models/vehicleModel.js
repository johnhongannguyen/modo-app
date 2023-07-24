// models/vehicle.js
const mongoose = require('mongoose');


const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  colour: { type: String, required: true },
  location_id: { type: Number, required: true },
  location_description: { type: String, required: true },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;
