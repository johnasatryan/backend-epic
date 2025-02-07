const sequelize = require('./database');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Cart = require('../models/Cart');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');

    // Sync all models
    await sequelize.sync({ force: true });
    console.log('Database synchronized');

    // Add seed data if needed
  } catch (error) {
    console.error('Database sync failed:', error);
  }
};

module.exports = syncDatabase;
