const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    name: DataTypes.STRING(100),
    surname: DataTypes.STRING(100),
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
    },

    image_url: DataTypes.TEXT,

    sensitive_info: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    // created_at: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    //   allowNull: false,
    // },
    // updated_at: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    //   allowNull: false,
    // },
  },
  {
    tableName: 'users',
    timestamps: true,
    underscored: true,
  }
);

module.exports = User;
