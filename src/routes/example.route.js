import express from 'express';
import { createTask, getTasks } from '../controllers/taskController.js';
import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

// Rota para criar uma nova tarefa
router.post('/todos', verifyToken, createTask);

// Rota para obter todas as tarefas
router.get('/todos', verifyToken, getTasks);

export default router;