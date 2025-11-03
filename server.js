

// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var configDB = require('./config/database.js');

var db

// configuration ===============================================================

mongoose.connect(configDB.url, (err) => {
  if (err) return console.log(err)
  db = mongoose.connection.db // get MongoDB driver
  require('./app/routes.js')(app, db);
}); // connect to our database

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set('view engine', 'ejs'); // set up ejs for templating

// launch ======================================================================
app.listen(port);
console.log('TradeMe Demo Day app running on port ' + port);

