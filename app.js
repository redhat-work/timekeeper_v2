var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');


/* #Import Routes#  */
var routes = require('./routes/index');
var users = require('./routes/users');
var personR = require('./routes/personR');
var projectR = require('./routes/projectR');
var authR = require('./routes/authR');
var timecardR = require('./routes/timecardR');
var organizationR = require('./routes/organizationR');
var roleR = require('./routes/roleR');
var taskR = require('./routes/taskR');
var periodR = require('./routes/periodR');

var app = express();

//enable cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




/* Assign Routes */
app.use('/', routes);
app.use('/', authR);


//app.use('/users', users);
app.use('/api', personR);
app.use('/api', projectR);
app.use('/api', timecardR);
app.use('/api', organizationR);
app.use('/api', roleR);
app.use('/api', taskR);
app.use('/api',periodR);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
