const Knex = require('knex');
module.exports =  async function up(knex:knex){
  return knex.schema.createTable('items', table =>{
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

module.exports =  async function down(knex:knex){
  return knex.schema.dropTable('items');
}