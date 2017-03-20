var _db = require('../database/_db');
var person_task = _db.person_task;
var person = _db.person;
var project = _db.project;
var task = _db.task;

var dot = require('dot-object');


/*# GET #*/
function all(req, res, next){

    project.findAll().then(function(projects) {

        res.json(projects);

    }).catch(function(err){

        next(err);

	});

}



/*# GET #*/
function byConsultant(req, res, next){

    var consultantID = parseInt(req.params.id);

    var opt = {};
    opt.include = [
        {
            model: task,
            required: true,
            include:[
        {
            model: person,
            required: true,
            through: {
                attributes: ['id_person'],
                where: {id_person: consultantID}
            }   
        }
            ]
        }
    ];

    project.findAll(opt).then(function(projects) {

        res.json(projects);

    }).catch(function(err){

        next(err);

	});

}


module.exports = {
    byConsultant:byConsultant,
    all:all
};