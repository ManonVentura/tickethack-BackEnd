const mongoose = require('mongoose');

const tripssSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number
});


const Trip = mongoose.model('trips', tripssSchema)

module.exports = Trip