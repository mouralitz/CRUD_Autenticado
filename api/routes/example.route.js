import express from 'express';
import exampleController from '../controller/example.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

// Rota para criar uma nova tarefa
router.post('/todos', verifyToken, exampleController.createTodo);

export default router;