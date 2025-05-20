const todos = []; // Simulação de um banco de dados em memória

// Controlador para listar todas as tarefas
const getTodos = (req, res) => {
  res.status(200).json({ success: true, data: todos });
};

// Controlador para criar uma nova tarefa
const createTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ success: false, message: 'Título e descrição são obrigatórios.' });
  }

  const newTodo = { id: todos.length + 1, title, description };
  todos.push(newTodo);

  res.status(201).json({ success: true, data: newTodo });
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