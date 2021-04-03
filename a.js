const EventEmitter = require('events').EventEmitter;
const Counter = function (init) {
    this.increment = function () {
        init++;
        this.emit('incremented', init);
    }
}

Counter.prototype = new EventEmitter();
let counter = new Counter(10);
let callback = function (count){
    console.log(count);
}

counter.addListener('incremented', callback)

counter.increment();
counter.increment();


counter.removeListener('incremented', callback)
counter.increment();
counter.increment();


/*const size = process.argv[2];
const total = process.argv[3] || 100;
let buff = [];
for(let i=0; i < total; i++) {
    buff.push(new Buffer(size));
    process.stdout.write(process.memoryUsage().heapTotal + "\n");
}*/

require('repl').start("> ").context.sayHello = function(name) {
    return "Hello " + name
};

