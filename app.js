var express = require('express');
var app = express();

// 加载静态文件
// app.use(express.static('public')); // 加载public文件夹下的静态文件

// 将静态文件挂载在一个虚拟的文件夹下
// app.use('/static', express.static('public'));

var brids = require('./brids');


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

app.get('/ab*cd', function(req, res){
  res.send('/ab*cd');
});

app.use('/brids', brids);


app.listen(3000);