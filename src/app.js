// Importe o Express e crie a instancia principal da aplicacao (app).
// Aqui ficam configuracoes globais, nao regras de negocio.

const express = require('express');
const app = express();

app.use(express.json());

const { logMiddleware } = require('./middlewares/logMiddleware');
app.use(logMiddleware);

const routes = require('./routes/index');
app.use('/', routes);

// Configure o fallback 404 para qualquer rota nao mapeada.
app.use((req, res) => {
    return res.status(404).json({ erro: 'PAGE NOT FOUND / ROTA NÃO ENCONTRADA' });
});

const { errorMiddleware } = require('./middlewares/errorMiddleware');
app.use(errorMiddleware);

// Exporte o app para ser iniciado pelo server.js.
module.exports = app;