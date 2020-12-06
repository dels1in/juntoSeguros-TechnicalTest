const { response } = require('../app');
const knex = require('../database/connection');

module.exports = {
  async index(req, res){
    const tasks = await knex('task').select('*');

    return res.json(tasks);
  },
  
  async createTask(req, res){
    const { title, description } = request.body;

    const newTask = await knex('task'). insert({
      title,
      description,
      done: 0,
      delete: 0,
    });

    return res.json(newTask)
  },

  /* async updateTask(req, res){
    const 
  }, */

  async deleteTask(req, res){
    const { id } = request.params;

    const task = await knex('task')
      .where('id', id)
      .delete();

    return res.json(task)
  }
}