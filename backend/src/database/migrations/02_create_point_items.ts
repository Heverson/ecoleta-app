const Knex = require('knex');
module.exports =  async function up(knex:knex){
  return knex.schema.createTable('point_items', table =>{
    table.increments('id').primary();
    
    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('points');

    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items');
  });
}

module.exports =  async function down(knex:knex){
  return knex.schema.dropTable('point_items');
}