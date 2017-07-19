var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
// 加载静态文件
// app.use(express.static('public')); // 加载public文件夹下的静态文件

// 将静态文件挂载在一个虚拟的文件夹下
// app.use('/static', express.static('public'));

var brids = require('./brids');
var _app = require('./_app');
var _router = require('./_router');
var _error = require('./_error');
var _jubing = require('./_jubing');
var _route = require('./_route');
// app.get('/', function(req, res) {
//   res.send('Hello world!');
// });

// app.get('/user', function(req, res){
//   res.send('user');
// });

// app.get('/user', function(req, res){
//   res.send(
//     {
//       name: 'coco',
//       age: '23'
//     }
//   );
// });

// app.get('/ab*cd', function(req, res){
//   res.send('/ab*cd');
// });

app.use('/brids', brids);
app.use('/app', _app);
app.use('/router', _router);
app.use('/error', _error);
app.use('/jubing', _jubing);
app.use('/route', _route);
app.use('/cookie', cookieParser());
app.listen(3000);