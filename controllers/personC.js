var _db = require('../database/_db');
var person = _db.person;
var organization = _db.organization;

var dot = require('dot-object');

/*# GET #*/
function all(req, res, next){

    person.findAll({include:[organization]}).then(function(persons) {

        res.json(persons);

    }).catch(function(err){

        next(err);

	});

}

/*# GET #*/
function byID(req, res, next){

    var id = parseInt(req.params.id);

    person.findOne({
        where: {
            id_person: id
        }
    }).then(function(p) {

        res.json(p);

    }).catch(function(err){

        next(err);

	});

}

function create(req, res, next){
    
    person.create(req.body).then( (p) =>{
        
        res.json(p);

    }, (error) => {

        console.log(error);
        next(err);

    });
}



module.exports = {
    all:all,
    create:create,
    byID:byID
};