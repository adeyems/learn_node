const fs = require('fs');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: fs.createReadStream('./dictionary.txt'),
    terminal: false
});
let arr = [];
rl.on('line', function (ln){
    arr.push(ln.trim());
})

rl.on('close', function (){
    console.log(arr)
});


rl.on('pause', function (){
    console.log('paused')
})

rl.on('resume', function (){
    console.log('resumed')
})

console.log(process.cwd(), __dirname);

