'use strict';

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var port = process.env.PORT || 8080;

/* Configuration */
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('*',function (req, res) {
      res.redirect('/');
  });

if (process.env.NODE_ENV === 'development') {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

/* Start server */
server.listen(port, function (){
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});

module.exports = app;
