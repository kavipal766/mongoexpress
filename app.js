var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var config = require('./config/config');
var http = require('http');

mongoose.promise = global.promise;

// var app = express();
//mongo db connectivuity//
var dataob = config.db;
console.log(dataob);
//  mongoose.connect(dataob).then((success))=>responseCode:200,responseMessage:"mongodb connected sucessfully"})
// )
// .catch((err)=>{
//   console.log(err)
//    res.json({responseCode:400,responseMessage:"Something went wrong."});
// })
mongoose.connect(dataob,function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  // Save database object from the callback for reuse.=
  db = database;
  console.log("****MongoDB Database connection ready****");
});
//port listen
var port = config.port;
app.set(port);
var server = http.createServer(app);
server.listen(port, function() {
    console.log("server is running on 5000")
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users',usersRouter);
console.log("hello");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
