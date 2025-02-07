const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Cart = sequelize.define(
  'Cart',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    tableName: 'carts',
    timestamps: false,
  }
);

module.exports = Cart;
