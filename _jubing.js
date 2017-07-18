var express = require('express');
var router = express.Router();

var fn1 = function(req, res, next) {
  console.log('使用回调函数数组处理路由==函数一');
  next();
};

var fn2 = function(req, res, next) {
  console.log('使用回调函数数组处理路由==函数二');
  next();
};

var fn3 = function(req, res, next) {
  res.send('使用回调函数数组处理路由==函数三');
};


router.get('/', [fn1, fn2, fn3]);

module.exports = router;