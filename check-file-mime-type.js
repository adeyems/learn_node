//We can use the Node command exec method of Node's child_process module
// in order to determine the MIME type of a file like so:
    const exec = require('child_process').exec;
exec("file --brief --mime ref_and_unref.js", function(err, mime) {
    console.log(mime);
});
