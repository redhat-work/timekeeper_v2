var express = require('express');
var router = express.Router();

var timecardC = require('../controllers/timecardC');


router.get('/timecards/cs/:idcs', timecardC.byPersonID);
router.get('/timecards/pm/:idpm', timecardC.byPersonID);
router.get('/timecards/tc/:idtc', timecardC.byTcID);


module.exports = router;