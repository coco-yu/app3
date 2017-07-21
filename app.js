var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var path = require('path');
var hbs = require('hbs');

app.set('views', './views');
app.engine('html', hbs.__express);
app.set('view engine', 'html');


// 加载静态文件
// app.use(express.static('public')); // 加载public文件夹下的静态文件

// 将静态文件挂载在一个虚拟的文件夹下
// app.use('/static', express.static('public'));




// var brids = require('./brids');
// var _app = require('./_app');
// var _router = require('./_router');
// var _error = require('./_error');
// var _jubing = require('./_jubing');
// var _route = require('./_route');
// var mysql = require('mysql.js');


var admin = express();
var secret = express();


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

// app.use('/brids', brids);
// app.use('/app', _app);
// app.use('/router', _router);
// app.use('/error', _error);
// app.use('/jubing', _jubing);
// app.use('/route', _route);
// app.use('/cookie', cookieParser());
// app.use('/mysql', mysql);

// admin.get('/', function(req, res){
//   console.log(admin.mountpath);
//   res.send('admin app');
// });

// secret.get('/', function(req, res){
//   console.log(secret.mountpath);
//   var data = {
//     'name': 'coco',
//     'age' : '23'
//   }
//   res.send(data);
// });

// admin.use('/secr*t', secret);
// app.use(['/adm*n', '/manager'], admin);



// admin.on('mount', function(parent){
//   console.log('admin mounted');
//   console.log(parent, '========');
// });

// admin.get('/', function(req, res){
//   res.send('admin homepage');
// });

// app.delete('/', function(req, res){
// res.send('DELETE request to homepage');
// });

// app.use('/admin', admin);

// app.disable('coco');
// app.get('coco');
// console.log('-------------------', app.disabled('trust proxy')); // true
// // console.log('###################', app.enable('trust proxy'));
// console.log('===================', app.disabled('trust proxy')); // false



// app.enable('trust proxy');
// app.disabled('trust proxy');


// app.enable('trust proxy');
// app.get('trust proxy');


// console.log(app.enabled('trust proxy'), '--------------');
// console.log(app.enable('trust proxy'), '--------------');
// console.log(app.enabled('trust proxy'), '--------------');
// var express = require('express');
// var https = require('https');
// var http = require('http');
// var app = express();

// http.createServer(app).listen(80);
// https.createServer(app).listen(443);

app.get('/my', function(req, res, next){
  var data = {
    'name': 'coco',
    'age': 18
  };

  data = JSON.stringify(data);
  res.render(path.join(__dirname, '/views/index.html'), {data: data});
});

app.listen(3000);