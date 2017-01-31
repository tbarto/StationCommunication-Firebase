'use strict';

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');

var socket = require('./socket/handleConnections.js');

var app = express();
var server = http.createServer(app);

var port = process.env.PORT || 8080;

/* Configuration */
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
//app.set('port', 3000);

app.get('*',function (req, res) {
      res.redirect('/');
  });

if (process.env.NODE_ENV === 'development') {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

/* Socket.io Communication */
var io = require('socket.io').listen(server);
io.sockets.on('connection', socket);
io.sockets.on('call',function(data){
  console.log('received call');
  socket.broadcast.emit('call',data);
});
io.sockets.on('clearCall', function(data){
  console.log('clearing call');
  socket.broadcast.emit('clearCall', data);
});

/* Start server */
server.listen(port, function (){
  //console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});

module.exports = app;
