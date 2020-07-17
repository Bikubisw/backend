const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res) {
    console.log(req.url);
    res.writeHead(200, { 'content-type': 'text/html' });
    let filepath;
    switch (req.url) {
        case '/':
            filepath = './index.html';
            break;
        case '/profile':
            filepath = '/profile.html';
            break;

        default:
            filepath = '/404.html';
            break;
    }
    fs.readFile(filepath, (err, data) => {
        if (err) {
            console.log("Page is not found");
            res.end("<h1>Error something is wrong</h1>")
        }
        return res.end(data)
    });

}
const server = http.createServer(requestHandler);

server.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("The server running on me", port);

});