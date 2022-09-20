var express = require('express');
var router = express.Router();
require('../models/connection');
const Trip = require('../models/trips');

/* GET all the trips with 3 parameters : departure, arrival and date. */
//! ajouter la date!!!!!!!
router.get('/', function(req, res, next) {
    // Trip.find()
  //Trip.find({ departure: req.query.departure, arrival:req.query.arrival})
  Trip.find({departure: { $regex: new RegExp(req.query.departure, 'i')}, arrival: { $regex: new RegExp(req.query.arrival, 'i')} /* date: req.query.date */ })
  .then(dbData => {
    console.log('db data: ', dbData)
    if (dbData === [null]) {

      console.log('if')
      res.json({ result: false, error: 'Sorry there is no trip available between those cities at those dates' })
      
      
    } else {
      console.log('else')
      
      res.json({trips : dbData})
    
        // res.json({error : 'Sorry there is no trip available between those cities at those dates'})
      }
   })
});

module.exports = router;
