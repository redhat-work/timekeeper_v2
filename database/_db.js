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
  "logging": console.log
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

/* data schema definitions */
var timecard =  db.import(path.join(__dirname,'models/timecard.js'));
var timecard_entry =  db.import(path.join(__dirname,'models/timecard_entry.js'));
var person = db.import(path.join(__dirname,'models/person.js'));
var organization = db.import(path.join(__dirname,'models/organization.js'));
var org_contact = db.import(path.join(__dirname,'models/org_contact.js'));
var person_task = db.import(path.join(__dirname,'models/person_task.js'));
var project = db.import(path.join(__dirname,'models/project.js'));
var role = db.import(path.join(__dirname,'models/role.js'));
var task = db.import(path.join(__dirname,'models/task.js'));


/* define relationship between tables */
person.belongsTo(organization, {foreignKey: 'id_org'});
person.belongsTo(role, {foreignKey: 'id_role'});
project.belongsTo(person, {foreignKey: 'id_pm'});
project.hasMany(task,{foreignKey: 'id_project'});
task.belongsTo(project, {foreignKey: 'id_project'});
task.belongsToMany(person, {through: 'person_task',foreignKey: 'id_task', unique:true});
person.belongsToMany(task, {through: 'person_task',foreignKey: 'id_person', unique:true});


timecard.belongsTo(project,{foreignKey: 'id_project'});
timecard.belongsTo(person,{foreignKey: 'id_consultant'});
timecard_entry.belongsTo(task,{foreignKey: 'id_task'});

timecard.hasMany(timecard_entry, {foreignKey: 'id_timecard'});
organization.belongsTo(org_contact,{foreignKey: 'id_org'});



module.exports.db = db;
module.exports.timecard = timecard;
module.exports.timecard_entry = timecard_entry;
module.exports.person = person;
module.exports.organization = organization;
module.exports.org_contact = org_contact;
module.exports.person_task = person_task;
module.exports.project = project;
module.exports.role = role;
module.exports.task = task;
