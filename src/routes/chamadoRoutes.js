const express = require('express');
const router = express.Router();

const chamadoController = require('../controllers/chamadoController');

router.post('/', (req, res) => chamadoController.criarChamado(req, res));
router.get('/:id', (req, res) => chamadoController.buscarPorId(req, res));
router.put('/:id/status', (req, res) => chamadoController.atualizarStatusChamado(req, res));
router.delete('/:id', (req, res) => chamadoController.deletarChamado(req, res));
router.get('/:id/historico', (req, res) => chamadoController.historicoChamado(req, res));

module.exports = router;
