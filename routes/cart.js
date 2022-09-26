var express = require("express");
var router = express.Router();
const moment = require("moment");
require("../models/connection");
const Trip = require("../models/trips");
const Cart = require("../models/cart");


/* ----------- Adding one trip to Cart -----------*/

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

/* ----------- Delete 1 item from the cart -----------*/
router.delete('/', (req, res) => {
  const {id} = req.body
  Cart.deleteOne({id}).then(() => {
    Cart.find().then(data => {
      console.log(data)
      res.json({result : true, Cart: data})
    })
  })
   
  }
)

/* ----------- Updating paiement for 1 trip ==> booking, while only displaying the trips not paid in cart -----------*/
//! a réessayer pour voir si uniquement les 
router.put('/paiement', (req,res) => {
  const {id} = req.body
  Cart.updateOne({id}, {ispaid: true}).then(() =>
  Cart.find({ispaid: false}).then(data => {
    console.log(data)
    res.json({result: true, Cart: data})
  }))
})

/* ----------- Updating paiement for all trips ==> booking -----------*/
router.put('/bookingall', (req,res) => {
  Cart.find().then(data => {
    // for (let i = 0; i < data.length; i++) {
      Cart.updateMany({ispaid : false}, {ispaid : true}).then(() => 
      Cart.find({ispaid: true}).then(data => {
        res.json({result: true, booking: data})
      }))
    // }
  })
})

/* ----------- Displaying only the trips paid in booking -----------*/
router.get('/booked', (req,res) => {
  Cart.find({ispaid: true}).then(data => {
    res.json({result: true, booking: data})
  })
})

/* ----------- Updating paiement for one trip ==> booking -----------*/
//! cette route est fausse, elle trouve juste le premier is paid true
// router.get('/bookingone', (req,res) => {
//   Cart.find({ispaid: true}).then(data => {
//     res.json({result: true, Booking: data})

//   })
// })



router.get("/",async  (req, res) => {

let result = await Cart.find().populate('trip')

console.log(result);

res.json({result: result})
    });





/* */

module.exports = router;
