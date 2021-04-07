const { workerData, parentPort } = require('worker_threads');

const { start } = workerData;
const { end } = workerData;

console.log(start, end)

var sum = 0
for (var i = start; i <= end; i++) {
    for (var j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
            break
        }
    }
    if (j > i / 2) {
        sum += i
    }
}
parentPort.postMessage({
    //send message with the result back to the parent process
    start: start,
    end: end,
    result: sum,
})
