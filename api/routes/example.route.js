const express = require('express');
const { createTask, getTasks } = require('../controllers/taskController.js');
const verifyToken = require('../middleware/jwt.token.middleware.js');

const router = express.Router();

// Rota para criar uma nova tarefa
router.post('/todos', verifyToken, createTask);

// Rota para obter todas as tarefas
router.get('/todos', verifyToken, getTasks);

module.exports = router;