var _db = require('../database/_db');
var timecard = _db.timecard;


function getPeriods(req, res, next){
    
    var today = new Date();
    var week = new Date(today.getFullYear(),today.getMonth(),today.getDate()-today.getDay());
    var dates = [];
    for(var i = -2; i <= 1; i++){
        dates.push(new Date(week.getFullYear(),week.getMonth(),week.getDate()+(7*i))); 
    }

    var opt ={};
    opt.where =  {
        period:{
            $gte: dates[0],
            $lte: dates[dates.length-1]
        }
    };

    timecard.findAll(opt).then( (timecards) =>{
        var periods = [];
        for(var i =0; i < dates.length; i++){
            var found = false;
            for(var j =0; j < timecards.length; j++){
                var t = new Date(timecards[j].period);
                var d = new Date(dates[i]);
                if(t.getFullYear()===d.getFullYear() && t.getMonth()===d.getMonth() && t.getDate()===d.getDate()){
                    found=true;
                    break;
                }
            }
            if(!found){
                periods.push(dates[i]);
            }
        }
        res.json(periods);

    }, (error) => {

        console.log(error);
        next(err);

    });
}



module.exports = {
    getPeriods:getPeriods,
};