const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();
const jwt = require('jsonwebtoken');
// const isAuth = (req, res, next) => {
//   const authString = req.headers['authorization'];

//   if (!authString) {
//     res.set('WWW-Authenticate', 'Basic realm="Please fill"');
//     res.status(401).send('Must be authenticated...');
//   }

//   const splittedData = authString.split(' ')[1];

//   const data = Buffer.from(splittedData, 'base64').toString('utf-8');
//   const [username, password] = data.split(':');
//   console.log(username, password);
//   req.user = username;
//   next();
// };
// const customKey = '123456';
// const isAuth = (req, res, next) => {
//   const apiKey = req.headers['x-api-key'];

//   const customHeaderKey = req.headers['chlp-key'];
//   console.log(customHeaderKey);

//   next();
// };

app.use(express.json());
let users = [
  {
    username: 'jamesbond',
    email: 'james@example.com',
    password: 'password',
    image_url: 'https://image.com',
    is_admin: false,
  },
];
const isAuth = (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1];

  const payload = jwt.verify(token, secret_key);
  const username = payload.username;

  const user = users.find((u) => u.username === username);

  const { password, ...withoutPassword } = user;
  req.user = withoutPassword;
  next();
};

// app.post('/register', (req, res) => { });

const secret_key = 'secret_key';

const createToken = (payload) => {
  const token = jwt.sign(payload, secret_key, { expiresIn: '1m' });

  return token;
};

app.post('/login', (req, res) => {
  const user = req.body;
  console.log(user);
  if (!user) {
    return res.status(400).json({ message: 'User data required' });
  }

  if (user.username && user.password) {
    const currentUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (!currentUser) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
  }
  const token = createToken({ username: user.username });
  if (!token) {
    res.status(500).json({ message: 'Invalid json' });
  }

  res.status(200).json({ auth_token: token });
});

app.get('/protected', isAuth, (req, res) => {
  res.send(req.user);
});

app.listen(PORT, () => {
  console.log(`Server runiung on ${PORT}`);
});
