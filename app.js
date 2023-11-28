var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Employee = require('./models/Employee')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeeRouter = require('./routes/Employee');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )
  app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());    

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Employee', employeeRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

require("dotenv").config();
const connectionString = process.env.MONGO_CON;
mongoose = require("mongoose");
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// /* only run to get screen shot 4
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

async function recreateDB() {
  // Delete everything
  await Employee.deleteMany();
  let instance1 = new Employee({Employee_fname:"Sumanth", Employee_lname:'Yeruva',Employee_id:1});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });

  let instance2 = new Employee({Employee_fname:"Balu", Employee_lname:'Yeruva',Employee_id:2});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });

  let instance3 = new Employee({Employee_fname:"Suri", Employee_lname:'Yeruva',Employee_id:3});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseed = true;
  if (reseed) {recreateDB();}



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
