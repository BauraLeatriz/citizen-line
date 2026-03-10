const Database = require('../config/database');

class ChamadosRepository {
    criarChamado({ titulo, descricao, categoria_id, usuario_id, status, cep }) {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.run(
                `INSERT INTO chamados (usuario_id, categoria_id, titulo, descricao, status, cep)
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [usuario_id, categoria_id, titulo, descricao, status, cep],
                function (err) {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve({
                        id: this.lastID,
                        usuario_id,
                        categoria_id,
                        titulo,
                        descricao,
                        status,
                        cep
                    });
                }
            );
        });
    }

    buscarPorId(id) {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.get('SELECT * FROM chamados WHERE id = ?', [id], (err, row) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(row);
            });
        });
    }

    atualizarStatus(id, novoStatus) {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.run('UPDATE chamados SET status = ? WHERE id = ?', [novoStatus, id], function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(this.changes > 0);
            });
        });
    }

    registrarHistorico({ chamado_id, usuario_id, status_anterior, status_atual }) {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.run(
                `INSERT INTO historico_status (chamado_id, usuario_id, status_anterior, status_atual)
                 VALUES (?, ?, ?, ?)`,
                [chamado_id, usuario_id, status_anterior, status_atual],
                function (err) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve({ id: this.lastID });
                }
            );
        });
    }

    deletarPorId(id) {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.run('DELETE FROM chamados WHERE id = ?', [id], function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(this.changes > 0);
            });
        });
    }

    obterHistorico(chamadoId) {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.all(
                `SELECT id, chamado_id, usuario_id, status_anterior, status_atual, data_alteracao
                 FROM historico_status
                 WHERE chamado_id = ?
                 ORDER BY data_alteracao DESC`,
                [chamadoId],
                (err, rows) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(rows);
                }
            );
        });
    }
}

module.exports = new ChamadosRepository();