var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next){
  console.log('-------------------------');
  console.log('Time', Date.now());
  next();
});

router.get('/', function(req, res){

  res.send('homepage brids');
});

router.get('/user', function(req, res){
  res.send('user brids');
});

module.exports = router;