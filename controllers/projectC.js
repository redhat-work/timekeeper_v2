var _db = require('../database/_db');
var person = _db.person;
var project = _db.project;
var task = _db.task;

var dot = require('dot-object');

/*# GET #*/
function byConsultant(req, res, next){

    var consultantID = parseInt(req.param.id);

    var options = {};
    options.include = [
        {
            model: person,
            through: {
                where: {id_person: consultantID}
            }   
        },
        project 
    ];

    task.findAll(options).then(function(projects) {

        res.json(projects);

    }).catch(function(err){

        next(err);

	});

}


module.exports = {
    byConsultant:byConsultant,
};