const http = require('node:http');

const server = http.createServer((req, res) => {
  const headers = new Headers({ 'Content-Type': 'text/html' });
  res.setHeaders(headers);
  res.end(() => {
    return 'hello world';
  });
});

server.listen(3001, () => {
  console.log('Server is listening...');
});
