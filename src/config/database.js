// IMPLEMENTAR SINGLETON AQUI

const database = require('sqlite3').verbose();
const path = require('node:path');
const fs = require('fs');

require('dotenv').config();

class Database {
    constructor(){
        if(!Database.instance){
            const dbPath = process.env.DB_PATH || path.join(__dirname, '../../database/app.db');
            this.db = new database.Database(dbPath);
            this.inicializarTabelas();
            Database.instance = this;
        }

        return Database.instance;
    }

    inicializarTabelas(){
        const schemaPath = path.join(__dirname, '../../database/schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf-8');
        this.db.exec(schema, (err) => {
            if (err) {
                console.error('Erro ao criar tabelas:', err.message);
            }
        });
    }
    
    static getInstance(){
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance.db;
    }
    
    getConnection(){
        return this.db; 
    }
}

module.exports = Database;
