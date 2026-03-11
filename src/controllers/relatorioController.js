const relatorioService = require('../services/relatorioService');

class RelatorioController {
    async gerarRelatorio(req, res) {
        try {
            const filtros = {
                status: req.query.status,
                categoria_id: req.query.categoria_id,
                cep: req.query.cep,
                dataInicio: req.query.dataInicio,
                dataFim: req.query.dataFim
            };
            const relatorio = await relatorioService.gerarRelatorio(filtros);
            return res.status(200).json(relatorio);
            
        } catch (erro) {
            return res.status(500).json({ 
                erro: erro.message 
            });
        }
    }
}

module.exports = new RelatorioController();