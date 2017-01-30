module.exports = function(socket){
  console.log('incoming connection');
  socket.emit('msg','hello I am sending you a message');
  socket.on('toServer',function(){
    socket.emit('msg','server received a toServer message, now sent this message');
    socket.broadcast.emit('call2','server sending a CALL message after toServer call');
  });
  socket.on('call',function(data){
    console.log('received call');
    socket.broadcast.emit('call',data);
  });
  socket.on('clearCall', function(data){
    console.log('clearing call');
    socket.broadcast.emit('clearCall', data);
  });
};
