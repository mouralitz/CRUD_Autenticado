const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

dotenv.config();

const app = express();

app.use(express.json());

// Rotas
app.use('/tasks', taskRoutes);

// Middleware de tratamento de erros
app.use(errorMiddleware);

module.exports = app;