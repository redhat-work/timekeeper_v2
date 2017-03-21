var express = require('express');
var router = express.Router();

var role = require('../controllers/roleC');


router.get('/roles', role.all);


module.exports = router;