var express = require('express');
var app = express();

app.use(function(err, req, res, next){
  consolr.log('error');
  next();
});

app.get('/', function(req, res){
  console.log('error home page');
  res.send('error home page');
});

module.exports = app;