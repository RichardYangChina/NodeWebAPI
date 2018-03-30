var express = require('express');
var router = express.Router();
var getData = require('../db/sqlite');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myData = getData.getTestData();
  res.json();
  //res.render('index', { title: 'Express' });
});

module.exports = router;
