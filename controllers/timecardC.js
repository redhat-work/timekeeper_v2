var _db = require('../database/_db');
var person = _db.person;
var timecard = _db.timecard;
var timecard_entry = _db.timecard_entry;
var project = _db.project;

var dot = require('dot-object');

/*# GET #*/
function byID(req, res, next){

    var options = {};
    options.include= [{
        model: timecard_entry,
        required: true
    }];
    options.order = [[timecard_entry, 'day', 'ASC']];


    if(req.params.idcs){

        console.log("consultant");
        options.where= {
            id_consultant: parseInt(req.params.idcs),
        }
        options.include.push(project);

    }else if(req.params.idpm){
        options.include.push(project);
        /*options.include.push({
            model: project,
            required: true,
            where: {
                id_pm: parseInt(req.params.idpm)
            }
        });*/
    }

    console.log(req.decoded);


    timecard.findAll(options)
    .then( timecards => {

        res.json( timecards );

    }).catch( err => {

        next(err);

	});

}



module.exports = {
    byID:byID,
};