var _db =  require("./database/_db");
var db = _db.db;
var timecard = _db.timecard;
var timecard_entry = _db.timecard_entry;

timecard.findAll({include:[timecard_entry]}).then(function(timecards){
    
    console.log(JSON.stringify(timecards));

},function(error){
    
    console.log(error);

});

var options = {};
options.include = [timecard_entry];
options.where = {
                id_timecard: 43,
            };

var item = {
    "id_consultant":6,
    "id_project":2,
    "comment_consultant":null,
    "comment_pm":null,
    "status":1,
    "on_pa":false,
    "timecard_entries":[
                {
                    "id_task":2,
                    "day":"2017-01-15T02:00:00.000Z",
                    "work_description":"",
                    "work_hours":0
                }
    ]
};

var item2 = {
    "id_consultant":6,
    "id_project":2,
    "comment_consultant":null,
    "comment_pm":null,
    "status":1,
    "on_pa":false,
    "timecard_entries":[{
        "id_timecard_entry":245,
        "id_task":2,
        "day":"2017-01-15T02:00:00.000Z",
        "work_description":"windows",
        "work_hours":0,
        "id_timecard":43}]
};

/* timecard.create(item,options).then(function(t){

    console.log(JSON.stringify(t));

},function(error){

    console.log(error);

}); */

/*timecard.update(item2,options).then(function(t){

    console.log(JSON.stringify(t));

},function(error){

    console.log(error);

});*/

/*
var tc = {
        "id_timecard_entry":246,
        "id_task":2,
        "day":"2017-01-15T02:00:00.000Z",
        "work_description":"windows",
        "work_hours":0,
        "id_timecard":43
    };
var opt = {};
opt.logging=false
timecard_entry.upsert(tc, opt).then(function(t){

    console.log(JSON.stringify(t));

},function(error){

    console.log(error);

});;*/