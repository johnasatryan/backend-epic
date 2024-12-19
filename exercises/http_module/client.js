const http = require('node:http');

const HOST = 'localhost';
const PORT = 3001;

const getUserData = () => {
  const options = {
    host: HOST,
    port: PORT,
    path: '/users',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;

      console.log('Response from server GET data:');
      console.log(JSON.parse(data));
    });

    res.on('error', (err) => {
      console.log(err);
    });
  });

  req.on('error', (err) => {
    console.log(err);
  });
  req.end();
};

const writeUserData = (userData) => {
  const jsonData = JSON.stringify(userData);
  const options = {
    host: HOST,
    port: PORT,
    path: '/users',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(jsonData),
    },
  };

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;

      console.log('Response from server POST data:');

      console.log(JSON.parse(data));
    });

    res.on('error', (err) => {
      console.log(err);
    });
  });

  req.write(jsonData, (err) => {
    console.log(err);
  });
  req.end();
};
getUserData();

const userData = { name: 'James', age: 23 };

writeUserData(userData);

getUserData();
