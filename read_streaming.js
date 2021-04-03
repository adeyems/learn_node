const stream = require('stream');
const readable = new stream.Readable({
    encoding: 'utf8',
    highWaterMark: 16000,
    objectMode: false
});


const Feed = function(channel) {
    const readable = new stream.Readable({
        encoding : "utf8"
    });
    const news = [
        "Big Win!",
        "Stocks Down!",
        "Actor Sad!"
    ];
    readable._read = function() {
        if(news.length) {
            return readable.push(news.shift() + "\n");
        }
        //readable.push('') if more data is expected in the future
        readable.push(null);
    };
    return readable;
}


const feed = new Feed();
feed.on('readable', function (){
   let data = feed.read();
   data && process.stdout.write(data);
});

feed.on('end', function (){
   console.log('___No more news___')
});


const ObjectReadable = new stream.Readable({objectMode: true})

    const prices = [
        { price : 1 },
        { price : 2 }
    ];
ObjectReadable._read = function () {
    ObjectReadable.push(prices.shift())
};

// Will be `true`

// indicating the number of bytes to be read from the stream's internal buffer. For
// example, if it was desired that a file should be read one byte at a time, one might
// implement a consumer using a routine similar to:

/* readable.push("Sequence of bytes");

feed.on("readable", function() {
    var character;
    while(character = feed.read(1)) {
        console.log(character);
    };*/


//Writable

const writable = new stream.Writable({
    decodeStrings: false
});
writable._write = function(chunk, encoding, callback) {
    console.log(chunk);
    callback();
}
let w = writable.write(new Buffer(100));
writable.end();

console.log(w);
//w = writable.write(new Buffer(16384));
//console.log(w); // Will be 'false'
