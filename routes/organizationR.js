var express = require('express');
var router = express.Router();

var organization = require('../controllers/organizationC');


router.get('/organizations', organization.all);
router.get('/organizations/:id', organization.byID);


module.exports = router;