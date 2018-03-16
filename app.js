var express = require("express");
var bodyParser = require('body-parser');
var sql = require("mssql");
var db = require('./db');
var logger = require('morgan');
var routes = require('./routes/index');
var agents = require('./routes/agents');

var port = process.env.PORT || 5000;

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/agents', agents);

app.listen(port);