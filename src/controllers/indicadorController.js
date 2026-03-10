const indicadorService = require('../services/indicadorService');

class IndicadorController {
    obter = (req, res) => {
        const dados = indicadorService.obterIndicadores();
        return res.status(200).json(dados);
    }
}

module.exports = IndicadorController;
