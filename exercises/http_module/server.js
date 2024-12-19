const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

let users = [];

const file_path = path.join(__dirname, 'users.json');
console.log(file_path);
const PORT = 3001;

const writeUserData = (file_path, data) => {
  try {
    fs.writeFileSync(file_path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(err);
  }
};

const readUserData = (file_path) => {
  try {
    const data = fs.readFileSync(file_path);

    return JSON.parse(data);
  } catch (err) {
    writeUserData(file_path, []);
    return [];
  }
};

const server = http.createServer((req, res) => {
  const method = req.method;
  const resource = req.url;

  if (!method || !resource) {
    res.writeHead(400, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'not allowed' }));
  }

  if (method === 'GET' && resource === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1> Welcome to our api </h1>');
  }
  if (method === 'GET' && resource === '/users') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(users));

    users = readUserData(file_path);
  } else if (method === 'POST' && resource === '/users') {
    res.writeHead(201, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'User created successfully' }));

    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      users = readUserData(file_path);
      const new_user = JSON.parse(data);

      users.push(new_user);

      writeUserData(file_path, users);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
});
