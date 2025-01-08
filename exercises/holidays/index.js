const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const Config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
  })
);

app.use(userRouter);
app.use(postRouter);

app.listen(Config.PORT, () => {
  console.log(`Server is runing on ${Config.HOST}:${Config.PORT}`);
});
