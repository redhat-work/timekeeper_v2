var _db = require('../database/_db');
var task = _db.task;


/*# GET #*/
function allByConsultantProject(req, res, next){

    task.findAll()
    .then( tasks => {

        res.json( tasks );

    }).catch( err => {

        next(err);

	});

}


module.exports = {
    allByConsultantProject:allByConsultantProject,
};