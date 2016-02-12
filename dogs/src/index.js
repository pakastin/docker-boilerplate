
var path = require('path');

var express = require('express');
var compression = require('compression');

var app = express();

var STATIC_PATH = path.join(__dirname, '..', 'public');

app.use(compression());
app.use(express.static(STATIC_PATH));

app.listen(80);
