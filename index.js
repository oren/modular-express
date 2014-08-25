var express = require('express');
var admin = require('./admin/app');
var client = require('./client/app');
var app = module.exports = express();

app.use('/admin', admin);
app.use(client);

app.listen(3001);
