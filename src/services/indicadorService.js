const Database = require('../config/database');

class IndicadorService {

    chamadosPorCategoria() {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.all(
                `SELECT c.nome AS categoria, COUNT(*) AS total
                 FROM chamados ch
                 JOIN categorias c ON ch.categoria_id = c.id
                 GROUP BY c.nome`,
                (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                }
            );
        });
    }

    chamadosPorStatus() {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.all(
                `SELECT status, COUNT(*) AS total
                 FROM chamados
                 GROUP BY status`,
                (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                }
            );
        });
    }

    chamadosPorCep() {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.all(
                `SELECT cep, COUNT(*) AS total
                 FROM chamados
                 GROUP BY cep`,
                (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                }
            );
        });
    }

    tempoMedioResolucao() {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            db.all(
                `SELECT 
                    AVG(julianday(h_fechado.data_alteracao) - julianday(h_aberto.data_alteracao)) AS media_dias
                 FROM historico_status h_aberto
                 JOIN historico_status h_fechado 
                    ON h_aberto.chamado_id = h_fechado.chamado_id
                 WHERE h_aberto.status_atual = 'Aberto'
                   AND h_fechado.status_atual = 'Fechado'`,
                (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                }
            );
        });
    }

    async obterIndicadores() {
        const [porCategoria, porStatus, porCep, tempoMedio] = await Promise.all([
            this.chamadosPorCategoria(),
            this.chamadosPorStatus(),
            this.chamadosPorCep(),
            this.tempoMedioResolucao()
        ]);

        return { porCategoria, porStatus, porCep, tempoMedio };
    }
}

module.exports = new IndicadorService();