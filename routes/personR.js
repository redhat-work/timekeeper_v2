var express = require('express');
var router = express.Router();

var project = require('../controllers/projectC');


router.get('/projects/cs/:id', project.byConsultant);


module.exports = router;