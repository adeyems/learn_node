const fs = require('fs');

fs.open('path.js', 'r', function(err, fd) {
    fs.fstat(fd, function(err, stats) {
        const totalBytes = stats.size;
        const buffer = new Buffer(totalBytes);
        let bytesRead = 0;
// Each call to read should ensure that chunk size is
// within proper size ranges (not too small; not too large).
        const read = function(chunkSize) {
            fs.read(fd, buffer, bytesRead, chunkSize, bytesRead,
                function(err, numBytes, bufRef) {
                    if((bytesRead += numBytes) < totalBytes) {
                        return read(Math.min(512, totalBytes - bytesRead));
                    }
                    fs.close(fd);
                    console.log("File read complete. Total bytes read: " +
                        totalBytes);
// Note that the callback receives a reference to the
// accumulating buffer
                    console.log(bufRef.toString());
                });
        }
        read(Math.min(512, totalBytes));
    });
});
