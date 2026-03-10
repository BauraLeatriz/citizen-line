const Database = require('../config/database');

class UserRepository {
    consultarEmail(email){
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.get('SELECT * FROM usuarios WHERE email = ?', [email], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    criarUsuario({nome, email, senha_hash}){
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.run('INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)', 
                [nome, email, senha_hash], 
                function(err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({
                            id: this.lastID,
                            nome,
                            email
                        });
                    }
                });
        });
    }
}

module.exports = new UserRepository();