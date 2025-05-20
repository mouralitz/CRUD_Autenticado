import Task from '../models/taskModel.js';

export const createTask = async (req, res) => {
  try {
    console.log('Body recebido:', req.body);
    console.log('Usuário autenticado:', req.user);

    const { title, description, status } = req.body;
    const userId = req.user?.id;

    if (!title || !userId) {
      return res.status(400).json({ message: 'Título e usuário são obrigatórios.' });
    }

    const task = await Task.create({ title, description, status, userId });
    res.status(201).json(task);
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ message: 'Erro ao criar a tarefa', error: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as tarefas', error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await Task.findOne({ _id: id, userId });
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar a tarefa', error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: id, userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a tarefa', error: error.message });
  }
};

export const partialUpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: id, userId },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a tarefa', error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const deletedTask = await Task.findOneAndDelete({ _id: id, userId });
    if (!deletedTask) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar a tarefa', error: error.message });
  }
};