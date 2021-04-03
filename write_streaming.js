const stream = require('stream');
const writable = new stream.Writable({
    decodeStrings: false
});
writable._write = function(chunk, encoding, callback) {
    console.log(chunk);
    callback();
}
let w = writable.write(new Buffer(100));
writable.end();

console.log(w); // will be true cos data is emptied

//w = writable.write(new Buffer(16384));
//console.log(w); // Will be 'false' cos data is not empty yet just that it triggers a drain event indicating that the watermark is reached


//let's create a Writable stream with
// a highWaterMark value of 10 bytes. We will send a buffer containing more than
// 10 bytes (composed of A characters) to this stream, triggering a drain event, at which
// point we write a single Z character.

let writeable = new stream.Writable({
    highWaterMark: 10
});

writeable._write = function (chunk, encoding, callback) {
    process.stdout.write(chunk);
    callback();
}

writeable.on('drain', function (){
    writeable.write('Z\n')
});

const buf = new Buffer(20, );
buf.fill("A");

console.log(writeable.write(buf.toString()))
