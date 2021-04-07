const express = require("express")
const app = express()
const { spawn } = require("child_process") //equal to const spawn = require('child_process').spawn

app.get("/ls", (req, res) => {
    const ls = spawn("ls", ["-lash", req.query.directory])
    ls.stdout.on("data", data => {
        //Pipe (connection) between stdin,stdout,stderr are established between the parent
        //node.js process and spawned subprocess and we can listen the data event on the stdout

        res.write(data.toString()) //date would be coming as streams(chunks of data)
        // since res is a writable stream,we are writing to it
    })
    ls.on("close", code => {
        console.log(`child process exited with code ${code}`)
        res.end() //finally all the written streams are send back when the subprocess exit
    })
})

// app.listen(7000, () => console.log("listening on port 7000"))

let ls = spawn('ls', ['-lh', '.']);
ls.stdout.on('readable', function() {
   const d = this.read();
    d && console.log(d.toString());
});
ls.on('close', function(code) {
    console.log('child process exited with code ' + code);
});

const php = spawn('php', ['-r', 'phpinfo();'])
php.stdout.on('readable', function (){
    let d;
    while (d = this.read()){
        console.log(d.toString())
    }
})

php.on('close', () => console.log('end'))
