const knex = require('knex')

exports.up = function up(knex){
  return knex.schema.createTable('task', table =>{
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.boolean('done').notNullable();
    table.boolean('deleted').notNullable();
  });
};

exports.down = function down(knex){
  return knex.schema.dropTable('task');
}