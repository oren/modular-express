var express = require('express');
var app = module.exports = express();

// Path to our public directory
var pub = __dirname + '/public';
app.use(express.static(pub));

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});
