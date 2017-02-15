var express = require('express');
var router = express.Router();

var timecardC = require('../controllers/timecardC');


router.get('/timecards/cs/:idcs', timecardC.byID);
router.get('/timecards/pm/:idpm', timecardC.byID);
router.get('/timecards/tc/:idtc', timecardC.byTcID);


module.exports = router;