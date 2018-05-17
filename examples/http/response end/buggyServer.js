const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('okay');
});

server.listen(8080);
