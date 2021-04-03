const net = require('net');
const stream = require('stream')
net.createServer(function (socket){
   socket.write('Type something');
   socket.on('readable', function (){
       process.stdout.write(this.read())
   })
}).listen(8080);
