var _db = require('../database/_db');
var task = _db.task;
var person = _db.person;

/*# GET #*/
function allByConsultantProject(req, res, next){

    console.log(req.params.id_project);
    var id_person = req.params.id_person;
    var id_project = req.params.id_project;

    var opt = {};
    opt.where = {id_project: id_project};
    opt.include = [{
        model: person,
        required: true,
        through: {
            where: {id_person: id_person}
        }   
    }];

    task.findAll(opt)
    .then( tasks => {

        res.json( tasks );

    }).catch( err => {

        next(err);

	});

}


module.exports = {
    allByConsultantProject:allByConsultantProject,
};