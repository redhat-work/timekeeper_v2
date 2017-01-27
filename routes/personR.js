var express = require('express');
var router = express.Router();

var person = require('../controllers/personC');


router.get('/persons', person.all);
router.post('/persons', person.create);

module.exports = router;