const express = require("express")
const app = express()
const { fork } = require("child_process");

app.get("/get-fibonacci", (req, res) => {
    const childProcess = fork(__dirname + "/child-forked-server.js") //the first argument to fork() is the name of the js file to be run by the child process
    childProcess.send({ number: parseInt(req.query.number) }) //send method is used to send message to child process through IPC
    const startTime = new Date()
    childProcess.on("message", message => {
        //on("message") method is used to listen for messages send by the child process
        const endTime = new Date()
        res.json({
            ...message,
            time: endTime.getTime() - startTime.getTime() + "ms",
        })
    })
})

app.get("/test-request", (req, res) => {
    res.send("I am unblocked now")
})

app.listen(3636, () => console.log("listening on port 3636"))
