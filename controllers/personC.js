var _db = require('../database/_db');
var person = _db.person;

var dot = require('dot-object');

/*# GET #*/
function all(req, res, next){

    person.findAll().then(function(persons) {

        res.json(persons);

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
    create:create
};