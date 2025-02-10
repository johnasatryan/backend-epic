const express = require('express');
const syncDatabase = require('./configs/sync');
const { usersRouter } = require('./routes');
const { productsRouter } = require('./routes');
const settings = require('./configs/settings');

const app = express();
syncDatabase().then(() => {});
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

app.listen(settings.PORT, () => {
  console.log(`Server is listnening on port ${settings.PORT}`);
});
