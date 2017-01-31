module.exports = function(socket){
  console.log('incoming connection');
  socket.on('call',function(data){
    console.log('received call');
    socket.broadcast.emit('call',data);
  });
  socket.on('clearCall', function(data){
    console.log('clearing call');
    socket.broadcast.emit('clearCall', data);
  });
};
