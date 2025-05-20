const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas protegidas para tarefas
router.post('/', authMiddleware, taskController.createTask);
router.get('/', authMiddleware, taskController.getTasks);
router.get('/:id', authMiddleware, taskController.getTaskById);
router.put('/:id', authMiddleware, taskController.updateTask);
router.patch('/:id', authMiddleware, taskController.partialUpdateTask);
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;