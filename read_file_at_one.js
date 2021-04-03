const fs = require('fs');

fs.readFile('file.txt', function (err, fileContentBuffer){
    if (err)
        throw err('Cannot read file.')

    console.log(fileContentBuffer);
})

//encoding the file content


fs.readFile('file.txt', {encoding: "utf-8"}, function (err , fileContent){
    if (err)
        throw err('Cannot read file.')

    console.log(fileContent);
})
