var express = require('express');
var router = express.Router();
var getData = require('../db/getJobList');
var getRes;

/* GET users listing. */
router.get('/', function (req, res, next) {
    
    var jobList = getData.getJobData(ResponseBody);
    getRes = res;
});

function ResponseBody(resBody){
    getRes.send(resBody);
}

module.exports = router;