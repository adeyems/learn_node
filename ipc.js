setInterval(function (){}, 1e6);
process.on('SIGINT', function (){
    console.log('SIGINT signal received.');
    process.exit(1);
});

setInterval(function() {}, 1e6);
process.on('SIGUSR1', function() {
    console.log('Got a signal!');
});


