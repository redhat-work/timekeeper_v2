var _db = require('../database/_db');
var role = _db.role;


/*# GET #*/
function all(req, res, next){

    role.findAll()
    .then( roles => {

        res.json( roles );

    }).catch( err => {

        next(err);

	});

}


module.exports = {
    all:all,
};