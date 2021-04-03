let cp = require('child_process');
const child = cp.fork('./parent.js')
child.on('message', function (msg){
    console.log('Child said ' + msg);
})

child.send('I love you')
