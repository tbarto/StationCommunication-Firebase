'use strict';

/**
 * Module dependencies.
 */
var path = require('path');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var port = process.env.PORT || 8080;

/* Configuration */
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

/* Routing */
// app.get('*',function (req, res) {
//       res.redirect('/');
//   });
//This works now!
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

if (process.env.NODE_ENV === 'development') {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

/* Start server */
server.listen(port, function (){
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});

module.exports = app;
