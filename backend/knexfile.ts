const path = require('path');
require('dotenv/config');

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || { 
    user: process.env.DATABASE_USER, 
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD 
  },
  migrations:{
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    loadExtensions: ['.ts'],
    extension: 'js'
  },
  seeds:{
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    loadExtensions: ['.ts'],
    extension: 'js'
  },
  useNullAsDefault: true,
}