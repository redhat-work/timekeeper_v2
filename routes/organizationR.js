var express = require('express');
var router = express.Router();

var organization = require('../controllers/organizationC');


router.get('/organizations', organization.all);


module.exports = router;