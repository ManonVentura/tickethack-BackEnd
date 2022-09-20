var express = require('express');
var router = express.Router();
require('../models/connection');
const fetch = require('node-fetch');
const Trip = require('../models/tripss');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
