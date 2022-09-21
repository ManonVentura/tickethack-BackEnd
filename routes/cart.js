var express = require("express");
var router = express.Router();
const moment = require("moment");
require("../models/connection");
const Trip = require("../models/trips");
const Cart = require("../models/cart");

/* POST add the selected trip to dbCart, same structure as Trip + is payed default false*/

router.post("/", (req, res) => {
const {id} = req.body
  //*utiliser ID en dur au début
  //let id = '632992cf8b33881ca3d1bf3a'
      const newCart = new Cart({
        trip: id,
        ispaid: false,
      });
      newCart.save().then((newDoc) => {
        
        res.json({ result: true, Cart: newDoc });
      });
});


router.get("/",async  (req, res) => {

let result = await Cart.find().populate('trip')

console.log(result);

res.json({})
    });



/* When is payed = true, DELETE from Cart and POST add to Booking (db?) */
//! OR
/* display in cart only the trips in dbCart with is payed false */

/* display in booking only the trips in dbCart with is payed true */

/* */

module.exports = router;
