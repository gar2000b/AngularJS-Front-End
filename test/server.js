var express = require('express'),
    app = express(),
    http = require('http'),
    httpServer = http.Server(app),
    urls = require('./dev/json/urls.json'),
    port = 3001;

var proxyMiddleware = require('http-proxy-middleware');
var apiProxy = proxyMiddleware('/simple-service-webapp/webapi/myresource/getURLs', {target: 'http://localhost:8080'});
app.use(apiProxy);

app.use(express.static(__dirname+'/app'));
app.get('/getURLs', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(urls);
});
app.get('/*', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
});
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});

// https://www.npmjs.com/package/http-proxy-middleware

// include dependencies 
// var express = require('express');
// var proxyMiddleware = require('http-proxy-middleware');
// var apiProxy = proxyMiddleware('/simple-service-webapp/webapi/myresource/getURLs', {target: 'http://localhost:8080'});

// var app = express();
//     app.use(apiProxy);
    // app.listen(3000);