const http = require('node:http');
let users = [];

const server = http.createServer((req, res) => {
  const method = req.method;

  if (method) {
    if (method === 'GET') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(users));
    } else if (method === 'POST') {
      let data = null;
      req.on('data', (chunk) => {
        console.log(JSON.parse(chunk));
        data = chunk;
      });
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(data));
    }
  }
});

const PORT = 3001;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is runing on ${PORT}`);
});
