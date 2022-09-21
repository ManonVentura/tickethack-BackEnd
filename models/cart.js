const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    _id: String,
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
    ispaid : Boolean,
});

const Cart = mongoose.model('cart', cartSchema)

module.exports = Cart