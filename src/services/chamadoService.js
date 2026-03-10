// Chamado Service
// Utilizando Padrão de Projeto Factory e Observer

// imports, require

const chamadoRepository = require('../repositories/chamadosRepository');

class ChamadoService {
    constructor() {
        this.FLUXO_STATUS = ['Aberto', 'Em Andamento', 'Fechado'];
    }

    // Factory para criação de tipos de chamados
    async criarChamado(dadosChamado) {
        const { titulo, descricao, categoria_id, usuario_id, cep } = dadosChamado;

        // Validação básica dos dados
        if (!titulo || !descricao || !categoria_id || !usuario_id || !cep) {
            throw new Error('Título, descrição, categoria_id, usuario_id e cep são obrigatórios para criar um chamado.');
            // Poderia ser mais específico, validando cada campo individualmente e retornando mensagens de erro mais detalhadas.

            
        }

        return chamadoRepository.criarChamado({
            titulo,
            descricao,
            categoria_id,
            usuario_id,
            status: 'Aberto',
            cep
        });
    }

    async buscarChamadoPorId(idChamado) {
        const chamado = await chamadoRepository.buscarPorId(idChamado);
        if (!chamado) {
            throw new Error('Chamado não encontrado.');
        }
        return chamado;
    }

    async atualizarStatusChamado(idChamado, novoStatus, usuarioId) {
        const chamado = await chamadoRepository.buscarPorId(idChamado);
        if (!chamado) {
            throw new Error('Chamado não encontrado.');
        }
        //Verificar se o novo status é válido
        if (!this.FLUXO_STATUS.includes(novoStatus)) {
            throw new Error('Status inválido.');
        }

        const proximoStatusIndex = this.FLUXO_STATUS.indexOf(chamado.status) + 1;
        const proximoStatus = this.FLUXO_STATUS[proximoStatusIndex];
        if (proximoStatus !== novoStatus) {
            throw new Error(`Transição inválida. Próximo status permitido: ${proximoStatus}.`);
        }

        await chamadoRepository.atualizarStatus(idChamado, novoStatus);
        await chamadoRepository.registrarHistorico({
            chamado_id: idChamado,
            usuario_id: usuarioId || chamado.usuario_id,
            status_anterior: chamado.status,
            status_atual: novoStatus
        });

        return { mensagem: 'Status atualizado com sucesso.' };
    }

    async deletarId(idChamado) {
        const removido = await chamadoRepository.deletarPorId(idChamado);
        if (!removido) {
            throw new Error('Chamado não encontrado.');
        }
        return { mensagem: 'Chamado deletado com sucesso.' };
    }

    async historicoID(idChamado) {
        await this.buscarChamadoPorId(idChamado);
        return chamadoRepository.obterHistorico(idChamado);
    }
}

module.exports = new ChamadoService();
