var _db = require('../database/_db');
var organization = _db.organization;

var dot = require('dot-object');

/*# GET #*/
function all(req, res, next){

    organization.findAll()
    .then( organizations => {

        res.json( organizations );

    }).catch( err => {

        next(err);

	});

}

/*# GET #*/
function byID(req, res, next){

    organization.findById(req.params.id)
    .then( org => {

        res.json( org );

    }).catch( err => {

        next(err);

	});

}


module.exports = {
    all:all,
    byID:byID
};