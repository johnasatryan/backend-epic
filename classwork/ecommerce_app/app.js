const express = require('express');
const syncDatabase = require('./configs/sync');
const authRoutes = require('./routes/auth');
const app = express();

syncDatabase();
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(3001, () => {
  console.log(`Server is runing on port: 3001`);
});
