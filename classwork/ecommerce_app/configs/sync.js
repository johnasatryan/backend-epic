const sequelize = require('./database');
const models = require('../models');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');

    // sync all models
    await sequelize.sync({ alter: true });
    console.log('✅ Database syncronized');
  } catch (err) {
    console.error('❌ Database sync failed:', err);
  }
};

module.exports = syncDatabase;
