const express = require('express');
const router = express.Router();

const chamadoController = require('../controllers/chamadoController');

router.post('/', chamadoController.criarChamado.bind(chamadoController));
router.get('/:id', chamadoController.buscarPorId.bind(chamadoController));
router.put('/:id/status', chamadoController.atualizarStatusChamado.bind(chamadoController));
router.delete('/:id', chamadoController.deletarChamado.bind(chamadoController));
router.get('/:id/historico', chamadoController.historicoChamado.bind(chamadoController));

module.exports = router;
