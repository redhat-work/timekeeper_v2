var _db = require('../database/_db');
var person = _db.person;
var timecard = _db.timecard;
var timecard_entry = _db.timecard_entry;
var project = _db.project;
var task = _db.task;

var dot = require('dot-object');

/*# GET #*/
function byID(req, res, next){

    var options = {};
    options.include= [{
        model: timecard_entry,
        required: true,
        //order : [[timecard_entry, 'day', 'ASC']]

    },{
        model: person,
        attributes:['name']
    }];
    options.order = [['id_timecard','DESC'],[timecard_entry, 'day', 'ASC']];
    options.include.push(project);

    if(req.params.idcs){

        console.log("consultant");
        options.where= {
            id_consultant: parseInt(req.params.idcs),
        }

    }else if(req.params.idpm){
        /*options.include.push({
            model: project,
            required: true,
            where: {
                id_pm: parseInt(req.params.idpm)
            }
        });*/
    }


    timecard.findAll(options)
    .then( timecards => {

        res.json( timecards );

    }).catch( err => {

        next(err);

	});

}


/*# GET #*/
function byTcID(req, res, next){

    var options = {};
    options.include= [{
        model: timecard_entry,
        required: true,
        include: [{
            model:task,
            attributes:['name']
        }]
    },{
        model: person,
        attributes:['name']
    }];
    options.order = [[timecard_entry, 'id_task', 'ASC'],[timecard_entry, 'day', 'ASC']];
    options.include.push(project);
    //options.group = ["task.name"];

    options.where= {
        id_timecard: parseInt(req.params.idtc),
    }

    timecard.findOne(options)
    .then( tc => {

        res.json( tc );

    }).catch( err => {

        next(err);

	});

}



module.exports = {
    byID:byID,
    byTcID:byTcID
};