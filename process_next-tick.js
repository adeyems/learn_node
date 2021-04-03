const events = require('events');
function getEmitter() {
    const emitter = new events.EventEmitter();
    emitter.emit('start');
    return emitter;
}

const myEmitter = getEmitter();
myEmitter.on("start", function() {
    console.log("Started");
});

//However, the expected result will not occur. The event emitter instantiated within
//getEmitter emits "start" previous to being returned, wrong-footing the subsequent
//assignment of a listener, which arrives a step late, missing the event notification.

function getEmitter1() {
    let emitter = new events.EventEmitter();
    process.nextTick(function() {
        emitter.emit('start');
    });
    return emitter;
}
myEmitter1 = getEmitter1();
myEmitter1.on('start', function() {
    console.log('Started 1');
})

