// Carregue as variaveis de ambiente no inicio da execucao (ex.: .env).

const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// Importe a aplicacao Express montada em src/app.js.

const app = require('./src/app');

// Leia a porta a partir de process.env.PORT e mantenha fallback para 3000.

const PORT = process.env.PORT || 3000;

// Inicie o servidor com app.listen(PORT, ...), exibindo um log simples de inicializacao.

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 