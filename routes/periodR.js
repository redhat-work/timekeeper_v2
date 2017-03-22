var express = require('express');
var router = express.Router();

var periodC = require('../controllers/periodC');


router.get('/periods', periodC.getPeriods);


module.exports = router;