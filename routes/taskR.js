var express = require('express');
var router = express.Router();

var taskC = require('../controllers/taskC');


router.get('/tasks/cs/:id_person/pj/:id_project', taskC.allByConsultantProject);

module.exports = router;