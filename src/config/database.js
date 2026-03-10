// IMPLEMENTAR SINGLETON AQUI

const database = require('sqlite3').verbose();
const path = require('node:path');
const fs = require('fs');

require('dotenv').config();

class Database {
    constructor(){
        if(!Database.instance){
            // se tiver nulo, cria
            const dbPath = process.env.DB_PATH || path.join(__dirname, '../../database/app.db');
            this.db = new database.Database(dbPath);
            Database.instance = this;
        }

        return Database.instance;
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
