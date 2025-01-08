require('dotenv').config()

class Config {
  static PORT = process.env.PORT || 3001
  static HOST = process.env.HOST || 'localhost'
  static secret_key = process.env.secret_key
  static expiresIn = process.env.expiresIn
};

module.exports = Config;