'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var redis = require('connect-redis');


;

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'));
}

app.set('view engine', 'ejs');
app.use(cookieParser());

var RedisStore = redis(session);
var myRedis;

/* istanbul ignore next */
if (process.env.REDIS_URL) {
  myRedis = new RedisStore({ url: process.env.REDIS_URL });
} else {
  myRedis = new RedisStore();
}

app.use(session({
  secret: 'Shhhhh!',
  resave: false,
  saveUninitialized: false,
  store: myRedis
}));

// to extract form data from POST bodies
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  require('express-debug')(app);
}


// allow other modules to use the server
module.exports = server;