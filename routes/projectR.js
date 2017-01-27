var express = require('express');
var router = express.Router();

var person = require('../controllers/personC');


router.get('/persons', person.all);
router.get('/persons/:id', person.byID);
router.post('/persons', person.create);

module.exports = router;