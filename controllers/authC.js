const crypto = require('crypto');
var _db = require('../database/_db');
var config = require('../config'); 
var jwt    = require('jsonwebtoken');
var person = _db.person;

var auth= {};
/**
 * Endpoint usado pelo servico da aplicacao
 */
auth.login = function(req,res,next){
    console.log(req.body);
    var hash = crypto.createHash('sha256')
                  .update(req.body.password) 
                  .digest('base64');


    person
    .findOne({
        raw: true,
        where: {
            password: hash,
            email: req.body.email
        }

    })
    .then(user=> {
        if(user){
            console.log("Usuario " +user.username+" logado com sucesso!");
            user.token = jwt.sign(user, config.secret , {
            expiresIn : 60*60*24 // expires in 2 hours
        
            });
            res.status(200).json(user);
        }else{
            res.status(403).json("user is invalid");
        }
     })
    .catch(function (err) {
        res.status(403).json(err);
    });
}

auth.verify= function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {      
      if (err) {
          console.log(err);
        return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded; 
        next();
      }
    });
  } else {
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    }); 
  }
}

module.exports = auth;