const express = require('express');
const router = express.Router();

const chamadoController = require('../controllers/chamadoController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, (req, res) => chamadoController.criarChamado(req, res));
router.get('/:id', authMiddleware, (req, res) => chamadoController.buscarPorId(req, res));
router.put('/:id/status', authMiddleware, (req, res) => chamadoController.atualizarStatusChamado(req, res));
router.delete('/:id', authMiddleware, (req, res) => chamadoController.deletarChamado(req, res));
router.get('/:id/historico', authMiddleware, (req, res) => chamadoController.historicoChamado(req, res));

module.exports = router;
