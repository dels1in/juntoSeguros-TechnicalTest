const express = require('express');

const taskController = require('./controllers/taskController');

const routes = express.Router();

routes.get('/getTasks', taskController.index);
routes.post('/newTask', taskController.createTask);
//routes.put('/updateTask', taskController.updateTask);
routes.delete('deleteTask/:id', taskController.deleteTask);

module.exports = routes;