import knex from 'knex';
require('dotenv/config');

const connection = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
    port: 5432
  },
})

export default connection;