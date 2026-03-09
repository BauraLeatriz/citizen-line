// IMPLEMENTAR SINGLETON AQUI

const database = require('sqlite3').verbose();
const path = require('node:path');
const fs = require('fs');

require('dotenv').config();

class Database {
    constructor(){
        if(!Database.instance){
            // se tiver nulo, cria
            const dbPath = process.env.DB_PATH;
            this.db = new Database(dbPath);
            Database.instance = this;
        
        }

        return Database.instance;
    }
    
    getConnection(){
        return this.db; 
    }
}

module.exports = Database;
