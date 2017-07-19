var express = require('express');
var app = express();

// app.use(function(err, req, res, next){
//   consolr.log('error');
//   next();
// });



app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('error home page');
});

module.exports = app;