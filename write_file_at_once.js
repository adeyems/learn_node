require('fs').writeFile('test.txt', 'A string or Buffer of data', function(err) {
    if(err) {
        return console.log(err);
    }
// File has been written
});


const writer = require('fs').createWriteStream("file.txt", );

writer.on('pipe', function (){
    console.log('piping')
})

process.stdin.pipe(writer);
