const fs = require('fs');

(function (dir){
    fs.readdir(dir, function (err, files){
        files.forEach(function (file){
            fs.stat(dir + '/' + file, function (err,stat){
                if (stat.isDirectory())
                    return console.log("Found Directory: " + file);
                return console.log("Found file " + file);
            })
        })
    })
}('.'))
