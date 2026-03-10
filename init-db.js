const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'citizen-line', 'database', 'app.db');
const schemaPath = path.join(__dirname, 'citizen-line', 'database', 'schema.sql');

// Criar o diretório se não existir
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

// Ler o schema SQL
const schema = fs.readFileSync(schemaPath, 'utf-8');

// Criar conexão com o banco
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao criar banco de dados:', err);
        process.exit(1);
    }
    console.log('Conectado ao banco de dados SQLite');
});

// Executar o schema
db.exec(schema, (err) => {
    if (err) {
        console.error('Erro ao executar schema:', err);
        process.exit(1);
    }
    console.log('Schema criado com sucesso!');
    
    db.close((err) => {
        if (err) {
            console.error('Erro ao fechar banco:', err);
        }
        console.log('Banco de dados inicializado com sucesso!');
    });
});
