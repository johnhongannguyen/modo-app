const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const vehicleRoutes = require('./routes/vehicles');
const userRoutes = require('./routes/user');
const app = express();

// middleware
app.use(express.json())
app.use((req,res,next)=>{
  console.log(req.path, req.method);
  next()
})

// routes
app.use('/api/vehicles',vehicleRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    // listen for req
  app.listen(process.env.PORT, ()=>{
  console.log(`connected to db & listening on port`, process.env.PORT);
})
  })
  .catch((err) =>{console.log(err)})


