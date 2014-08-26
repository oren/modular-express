var express = require('express');
var admin = require('./admin/app');
var client = require('./client/app');
var app = module.exports = express();

app.locals.foo = 'bar';
console.log('in index.js', app.locals.foo);

app.use('/admin', admin);
app.use(client);

app.listen(3001);
