process.on("message", message => {
    //child process is listening for messages by the parent process
    const result = fibonacci(message.number)
    process.send({result})
    process.exit() // make sure to use exit() to prevent orphaned processes
})

function fibonacci(number) {
   if (number <= 1)
       return 1

    return fibonacci(number - 1) + fibonacci(number - 2)
}
