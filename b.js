//Create two files, repl_client.js and repl_server.js, using the following code,
  //  and run each in its own terminal window, such that both terminal windows are
// visible to you.
    /* repl_client.js */
    var net = require('net');
var sock = net.connect(8080);
process.stdin.pipe(sock);
sock.pipe(process.stdout);
/* repl_server.js */
var repl = require('repl')
var net = require('net')
net.createServer(function(socket) {
    repl
        .start({
            prompt : '> ',
            input : socket,
            output : socket,
            terminal : true
        })
        .on('exit', function () {
            socket.end()
        })
}).listen(8080)
