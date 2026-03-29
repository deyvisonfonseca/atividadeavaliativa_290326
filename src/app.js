const express = require('express');
const userRoutes = require('./routes/index'); // Ou user/index se for o caso
const carRoutes = require('./routes/carRoutes');
const logger = require('./middlewares/logger');

const app = express();

// Middleware que intercepta e converte o corpo da requisição para JSON
app.use(express.json());

// Middleware Global de Log (executa em todas as requisições)
app.use(logger);

// Rotas de Usuários (Ajustado o nome da variável de 'routes' para 'userRoutes')
app.use('/users', userRoutes); 

// Rotas de Carros
app.use('/cars', carRoutes);

module.exports = app;