const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Order = sequelize.define(
  'Order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Paid', 'Shipped', 'Canceled'),
      defaultValue: 'Pending',
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    tableName: 'orders',
    timestamps: false,
  }
);

module.exports = Order;
