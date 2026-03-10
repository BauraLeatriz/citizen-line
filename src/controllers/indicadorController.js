const indicadorService = require('../services/indicadorService');

class IndicadorController {

    async obterTodos(req, res) {
        try {
            const dados = await indicadorService.obterIndicadores();
            return res.status(200).json(dados);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async porCategoria(req, res) {
        try {
            const dados = await indicadorService.chamadosPorCategoria();
            return res.status(200).json(dados);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async porStatus(req, res) {
        try {
            const dados = await indicadorService.chamadosPorStatus();
            return res.status(200).json(dados);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async porCep(req, res) {
        try {
            const dados = await indicadorService.chamadosPorCep();
            return res.status(200).json(dados);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async tempoMedio(req, res) {
        try {
            const dados = await indicadorService.tempoMedioResolucao();
            return res.status(200).json(dados);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }
}

module.exports = new IndicadorController();
