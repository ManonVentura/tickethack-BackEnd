var express = require('express');
var router = express.Router();
const moment = require('moment');
require('../models/connection');
const Trip = require('../models/trips');
const Cart = require('../models/cart')

/* GET all the trips with 3 parameters : departure, arrival and date. */
router.post('/', function(req, res, next) {
  const { departure, arrival, date } = req.body
  Trip.find({
    departure: { $regex: new RegExp(departure, 'i')}, 
    arrival: { $regex: new RegExp(arrival, 'i')},  
    date: { $gte : moment(date).startOf('day'), $lte : moment(date).endOf('day')} 
  })
  .then(dbData => {
    if (dbData.length === 0) {
      res.json({ result: false, error: `Sorry there is no trip available between ${departure} and ${arrival} at those dates` })
      
      
    } else {
      
      res.json({trips : dbData})
    
      }

      
   })
});



module.exports = router;
