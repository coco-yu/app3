// 链式路由

var express = require('express');
var app = express();

app.route('/book')
.get(function(req, res, next){
  console.log('book route get');
  res.send('book route get');
})
.post(function(req, res){
  res.send('book route post')
})
.put(function(req, res){
  res.send('book route put')
});

module.exports = app;
