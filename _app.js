var express = require('express');
var app = express();

app.use(function coco(req, res, next){
  console.log('coco');
  next();
});

app.get('/', function(req, res){
  res.render('app home page');
});

app.get('/app-about', function(req, res){
  res.send('app about page');
})
module.exports = app;