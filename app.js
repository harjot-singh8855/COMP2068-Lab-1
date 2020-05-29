'use strict';
const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(300, {
        "Content-Type": "text/plain"
    });
    res.end('Hello World!');
}).listen(3000);
console.log('Hello world it is now changed');
