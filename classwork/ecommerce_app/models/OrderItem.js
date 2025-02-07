const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const OrderItem = sequelize.define(
  'OrderItem',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'order_items',
    timestamps: false,
  }
);

module.exports = OrderItem;
