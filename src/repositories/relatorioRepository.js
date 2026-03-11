const Database = require('../config/database');

class RelatorioRepository {
    buscarChamadosFiltrados({ status, categoria_id, cep, dataInicio, dataFim }) {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            let query = `
                SELECT ch.id, ch.titulo, ch.descricao, ch.status, ch.cep,
                       ch.data_criacao, c.nome AS categoria
                FROM chamados ch
                JOIN categorias c ON ch.categoria_id = c.id
                WHERE 1=1
            `;
            const params = [];

        });
    }
}

module.exports = new RelatorioRepository();