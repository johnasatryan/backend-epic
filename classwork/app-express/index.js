const express = require('express');
const app = express();

app.use(express.json());
app.get('/users', (req, res) => {
  res.send('<h1> hello world </h1>');
});

app.post('/users', (req, res) => {
  const body = req.body;

  console.log(body);
  res.send({ message: 'User created successfully' });
});

app.listen(3001, () => {
  console.log('hello server on port: 3001');
});
