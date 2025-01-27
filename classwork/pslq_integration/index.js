require('./database/connection');
const express = require('express');
const userRouter = require('./routes/usersRoute');
const app = express();

app.use(express.json());
app.use('/users', userRouter);

app.listen(3001, () => {
  console.log('Server is runing on 3001');
});
