
var NET = process.env.NET;

var express = require('express');
var app = express();
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

app.set('strict routing', true);

app.get('/cats', redirectTo('/cats/'));
app.get('/dogs', redirectTo('/dogs/'));

app.get('/', proxyTo(`http://${NET}_index_1`));

app.use('/cats', proxyTo(`http://${NET}_cats_1`));
app.use('/dogs', proxyTo(`http://${NET}_dogs_1`));

function redirectTo (target) {
  return function (req, res, next) {
    res.redirect(target);
  }
}

function proxyTo (target) {
  return function (req, res, next) {
    proxy.web(req, res, {target: target});
  }
}

app.listen(80);
