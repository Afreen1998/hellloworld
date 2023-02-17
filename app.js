let http = require('http');

let server = http.createServer((request, response) => {
  response.writeHead( 200, {'Content-Type': 'text/plain'});
  response.end('Welcome to the learning session. Happy learning !!');
});

server.listen(3000, () => console.log("Welcome to the learning session. Happy learning !!"));