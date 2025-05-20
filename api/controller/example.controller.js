const Task = require('../../models/taskModel.js');

const todos = []; // Simulação de um banco de dados em memória

// Controlador para listar todas as tarefas
const getTodos = (req, res) => {
  res.status(200).json({ success: true, data: todos });
};

// Função para criar uma nova tarefa
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user?.id; // Certifique-se de que o middleware adiciona `user` ao `req`

    if (!title) {
      return res.status(400).json({ success: false, message: 'O título é obrigatório.' });
    }

    const newTask = await Task.create({
      title,
      description,
      userId,
    });

    res.status(201).json({ success: true, data: newTask });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao criar a tarefa.', error: error.message });
  }
};

const securedExample = async (req, res) => {
    console.log("Something that needs authentication runs here");
    return res.status(200).json({ message: 'This is a secured endpoint' });
}

export default {
  securedExample,
  getTodos,
  createTodo,
};