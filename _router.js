var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next){
  console.log('router');
  next();
});

router.get('/', function(req, res, next){
  res.send('router home page');
  next();
});

router.get('/about', function(req, res){
  res.send('router about page');
});

router.get('/user/:id', function(req, res, next){
  console.log('中间件1');
  if(true) {
    next('route');
  } else {
    next();
  }
}, function(req, res){
  console.log('中间件2');
  res.send('coco');
});

router.get('/user/:id', function(req, res){
  console.log('test next');
});

module.exports = router;