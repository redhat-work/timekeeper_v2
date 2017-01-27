var sequelize = require('sequelize');
var path = require('path');
var debug = require('debug')('myapp:db:sequelize');

var config = {
  "username": "redhat",
  "password": "redhat",
  "database": "brazil",
  "host": process.env.db_url || 'localhost',
  "dialect": "postgres",
  "pool": {
    "max": 10,
    "min": 5
  },
  "freezeTableName": true,
  "underscored":true,
  "timestamps": false,
  "omitNull": true,
  "logging": debug
}

var db = new sequelize(config.database, config.username, config.password, config);

db
.authenticate()
.then(function(err) {
    debug("Connecting  to database with the following config: \n %j",config)
})
.catch(function (err) {
    debug("Error connecting  to database with the following config: \n %j",config)
    debug('Error: %s', err);
});

/* definitions */
var timecard =  db.import(path.join(__dirname,'models/timecard.js'));
var timecard_entry =  db.import(path.join(__dirname,'models/timecard_entry.js'));
var person = db.import(path.join(__dirname,'models/person.js'));

timecard.hasMany(timecard_entry,{foreignKey: 'id_timecard'});

module.exports.db = db;
module.exports.timecard = timecard;
module.exports.timecard_entry = timecard_entry;
module.exports.person = person;
