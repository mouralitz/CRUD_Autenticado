import express from 'express';
import exampleController from '../controller/example.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

// Rota para criar uma nova tarefa
router.post('/todos', (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).json({ success: false, message: 'O título é obrigatório.' });
  }
  next();
}, exampleController.createTodo);

export default router;