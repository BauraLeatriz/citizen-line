const express = require('express');
const router = express.Router();

const indicadorController = require('../controllers/indicadorController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, (req, res) => indicadorController.obterTodos(req, res));
router.get('/categoria', authMiddleware, (req, res) => indicadorController.porCategoria(req, res));
router.get('/status', authMiddleware, (req, res) => indicadorController.porStatus(req, res));
router.get('/cep', authMiddleware, (req, res) => indicadorController.porCep(req, res));
router.get('/tempo-medio', authMiddleware, (req, res) => indicadorController.tempoMedio(req, res));

module.exports = router;
