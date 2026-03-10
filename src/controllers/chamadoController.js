const chamadoService = require('../services/chamadoService');

class ChamadoController {

    async criarChamado(req, res) {
        try {
            const chamado = await chamadoService.criarChamado(req.body);
            return res.status(201).json(chamado);
        } catch (erro) {
            return res.status(400).json({ erro: erro.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const id = req.params.id;
            const chamado = await chamadoService.buscarChamadoPorId(id);
            return res.status(200).json(chamado);
        } catch (erro) {
            return res.status(404).json({ erro: erro.message });
        }
    }

    async atualizarStatusChamado(req, res) {
        try {
            const id = req.params.id;
            const { novoStatus, usuario_id } = req.body;
            const resultado = await chamadoService.atualizarStatusChamado(id, novoStatus, usuario_id);
            return res.status(200).json(resultado);
        } catch (erro) {
            return res.status(400).json({ erro: erro.message });
        }
    }

    async deletarChamado(req, res) {
        try {
            const id = req.params.id;
            const resultado = await chamadoService.deletarId(id);
            return res.status(200).json(resultado);
        } catch (erro) {
            return res.status(404).json({ erro: erro.message });
        }
    }

    async historicoChamado(req, res) {
        try {
            const id = req.params.id;
            const historico = await chamadoService.historicoID(id);
            return res.status(200).json(historico);
        } catch (erro) {
            return res.status(404).json({ erro: erro.message });
        }
    }
}

module.exports = new ChamadoController();
