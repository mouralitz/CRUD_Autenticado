import express from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  partialUpdateTask,
  deleteTask
} from '../controller/taskController.js';
import verifyToken from '../middlewares/jwt.token.middleware.js';

const router = express.Router();

// Rotas protegidas para tarefas
router.post('/', verifyToken, createTask);
router.get('/', verifyToken, getTasks);
router.get('/:id', verifyToken, getTaskById);
router.put('/:id', verifyToken, updateTask);
router.patch('/:id', verifyToken, partialUpdateTask);
router.delete('/:id', verifyToken, deleteTask);

export default router;