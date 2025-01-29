const express = require('express');
const { enusreDatabaseExists } = require('./configs/database');
const { initializeTables } = require('./models/initTables');
const userRoutes = require('./routes/userRoutes');
const app = express();

enusreDatabaseExists();
initializeTables();

app.use(express.json());

app.use('/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
