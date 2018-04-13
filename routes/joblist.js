var express = require('express');
var router = express.Router();
var getData = require('../db/getJobList');

/* GET users listing. */
router.get('/', function (req, res, next) {
    
    var jobList = getData.getJobData();
    res.json(jobList);
});

router.get('/test', function (req, res, next) {
    
    var jobList = getData.getJobData();
    res.json(jobList);
});

module.exports = router;