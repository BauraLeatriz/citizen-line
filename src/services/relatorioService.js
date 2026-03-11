const relatorioRepository = require('../repositories/relatorioRepository');

class RelatorioService {

    async gerarRelatorio(filtros){
        const dados = await relatorioRepository.buscarChamadosFiltrados(filtros);
        return {
                total: dados.length,
                filtrosAplicados: filtros,
                chamados: dados
        };
    }
}

module.exports = new RelatorioService();