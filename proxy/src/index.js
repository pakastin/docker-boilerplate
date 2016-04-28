
var NET = process.env.NET;

var express = require('express');
var app = express();
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

app.set('strict routing', true);

app.get('/cats', redirectTo('/cats/'));
app.get('/dogs', redirectTo('/dogs/'));

app.get('/', proxyTo(`http://index`));

app.use('/cats', proxyTo(`http://cats`));
app.use('/dogs', proxyTo(`http://dogs`));

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
