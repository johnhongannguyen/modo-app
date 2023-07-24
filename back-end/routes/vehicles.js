// routes/vehicles.js
const express = require('express');
const {createVehicle,getVehicle, getVehicles, deleteVehicle, updateVehicle} = require('../controllers/vehicleController')
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');

// require auth for all vehicle routes
router.use(requireAuth);
// GET all vehicles
router.get('/', getVehicles)

// GET a single vehicle

router.get('/:id', getVehicle);

// POST a new vehicle

router.post('/',createVehicle)

// DELETE a vehicle
router.delete('/:id', deleteVehicle);

// UPDATE a vehicle

router.patch('/:id', updateVehicle);


module.exports = router;
