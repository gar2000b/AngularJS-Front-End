var express = require('express'),
    app = express(),
    http = require('http'),
    httpServer = http.Server(app),
    urls = require('./dev/json/urls.json'),
    port = 3001;
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
