// Create web server

// Import http module
const http = require('http');

// Create http server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// to start the server run 'node comment.js' in terminal