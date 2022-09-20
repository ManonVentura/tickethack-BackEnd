const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:uIvlBZOvD6hSEcD8@cluster0.q8wyzu5.mongodb.net/tickethack'

mongoose.connect(connectionString, {connectTimeOutMS: 2000})
.then(() => console.log('Database Mongoose connected'))
.catch(error => console.error(error));