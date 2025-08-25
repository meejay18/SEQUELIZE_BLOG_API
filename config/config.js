require('dotenv').config()

module.exports = {
  development: {
    username: 'sql12796067',
    password: 'JdkqlfD1SN',
    database: process.env.database,
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
}
