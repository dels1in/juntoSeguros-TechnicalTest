const knex = require('knex');

exports.seed = function seed(knex){

  return knex('task').truncate()
    .then(function (){
      return knex('task').insert([
        {title: "Task 1", description: "First Task", done: 0, deleted:0 },
        {title: "Task 2", description: "Second Task", done: 1, deleted:0 },
        {title: "Task 3", description: "Third Task", done: 0, deleted:1 },
      ])
    })

}