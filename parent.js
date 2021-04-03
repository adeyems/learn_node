process.on('message', function (){
    console.log('message received');
    process.send('I love you, child');
})
