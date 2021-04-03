const fs = require('fs');
fs.watch(__dirname + '/file.txt', {persistent: true}, function (event, filename){
    console.log(event);
    console.log(filename);
})

console.log(__dirname + '/file.txt');
