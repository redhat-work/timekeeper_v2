var express = require('express');
var router = express.Router();

var authC = require('../controllers/authC');


router.post('/auth', authC.login);
router.use('/api', authC.verify);


module.exports = router;