const sequelize = require('./database');
const Account = require('./models/account');

sequelize.sync({ force: true }).then(async () => {
  console.log('Database synchronized');

  await Account.bulkCreate([
    { name: 'Alice', balance: 1000 },
    { name: 'Bob', balance: 500 },
  ]);

  console.log('Initial data inserted');
  process.exit();
});
