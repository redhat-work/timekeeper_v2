var express = require('express');
var router = express.Router();

var taskC = require('../controllers/taskC');


router.get('/task/cs/:id_person:/project/:id_project', taskC.allByConsultantProject);

module.exports = router;