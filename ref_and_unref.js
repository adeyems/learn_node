/*const intervalId = setInterval(function() {}, 1000);
intervalId.unref();*/

setTimeout(function() {
    console.log("now stop");
}, 100);
var intervalId = setInterval(function() {
    console.log("running")
}, 1);
intervalId.unref();
