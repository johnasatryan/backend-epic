const { Sequelize } = require('sequelize');
const settings = require('./settings');

// Connect to the default PostgreSQL instance (system database)
const defaultSequelize = new Sequelize(
  settings.DEFAULT_DB, // Usually 'postgres'
  settings.DB.USER,
  settings.DB.PASSWORD,
  {
    host: settings.DB.HOST,
    port: settings.DB.PORT,
    dialect: settings.DB.DIALECT,
    logging: false,
  }
);

// Function to ensure the target database exists
const ensureDatabaseExists = async () => {
  try {
    await defaultSequelize.authenticate();
    console.log(`✅ Connected to default database '${settings.DEFAULT_DB}'`);

    // Check if the target database exists
    const [results] = await defaultSequelize.query(
      `SELECT 1 FROM pg_database WHERE datname = '${settings.DB.NAME}'`
    );

    if (results.length === 0) {
      console.log(`⚠️ Database '${settings.DB.NAME}' not found. Creating...`);
      await defaultSequelize.query(`CREATE DATABASE ${settings.DB.NAME}`);
      console.log(`✅ Database '${settings.DB.NAME}' created.`);
    } else {
      console.log(`✅ Database '${settings.DB.NAME}' already exists.`);
    }

    await defaultSequelize.close();
  } catch (error) {
    console.error('❌ Error ensuring database exists:', error);
    process.exit(1);
  }
};

// Create and export the main Sequelize instance (Singleton Pattern)
const sequelize = new Sequelize(
  settings.DB.NAME,
  settings.DB.USER,
  settings.DB.PASSWORD,
  {
    host: settings.DB.HOST,
    port: settings.DB.PORT,
    dialect: settings.DB.DIALECT,
    logging: false,
  }
);

// Initialize the database before exporting Sequelize
ensureDatabaseExists().then(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established.');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
});

module.exports = sequelize;
