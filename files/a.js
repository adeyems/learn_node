const path = require('path');
const fs = require("fs");
console.log(path.normalize("../one////two/./three.html"));
console.log(path.join("../","one","two","three.html"))
console.log(path.dirname('../one/two/three.html'))
console.log(path.basename('../one/two/three.html'))
console.log(path.extname('../one/two/three.html'))
console.log(('../one/two/three.html').slice(('../one/two/three.html').lastIndexOf('.')));
console.log(path.relative(
    '/one/two/three/four',
    '/one/two/thumb/war'
));
console.log(path.resolve('/one/two', '/three/four'));
console.log(path.resolve('/one/two/three', '../', 'four', '../../five'))


//To read the attributes of a file, use fs.stat:
fs.stat("file.txt", function(err, stats) {
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isDirectory());
    console.log(stats.isCharacterDevice());
    console.log(stats.isBlockDevice());
    console.log(stats.isSocket());
    console.log(stats.isFIFO()); //named pipe
});


fs.open('file.txt', 'w+', 755, function (err, fd){
    fs.write(fd, new Buffer(20), function (err){
        console.log(err)
    })
})
