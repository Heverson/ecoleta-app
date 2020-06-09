const Knex  = require('knex');
module.exports = async function up(knex:Knex){
  return knex.schema.createTable('points', table =>{
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('latitude').notNullable();
    table.string('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
}

module.exports =  async function down(knex:Knex){
  return knex.schema.dropTable('points');
}