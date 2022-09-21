var express = require('express');
var router = express.Router();
const moment = require('moment');
require('../models/connection');
const Trip = require('../models/trips');
const Cart = require('../models/cart');


/* POST add the selected trip to dbCart, same structure as Trip + is payed default false*/

router.post('/', (req, res) => {
    //*utiliser ID en dur au début
    Trip.findOne({_id: dd})
    const newCart = new Cart({
    c,
    ispaid : Boolean,
    })
    newCart.save().then(newDoc => {
        res.json({result: true, Cart : newDoc})
    })
})


/* When is payed = true, DELETE from Cart and POST add to Booking (db?) */
//! OR
/* display in cart only the trips in dbCart with is payed false */

/* display in booking only the trips in dbCart with is payed true */

/* */




module.exports = router;
