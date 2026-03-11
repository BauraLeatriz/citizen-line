const express = require('express');
const router = express.Router();

const indicadorController = require('../controllers/indicadorController');

router.get('/', (req, res) => indicadorController.obterTodos(req, res));
router.get('/categoria', (req, res) => indicadorController.porCategoria(req, res));
router.get('/status', (req, res) => indicadorController.porStatus(req, res));
router.get('/cep', (req, res) => indicadorController.porCep(req, res));
router.get('/tempo-medio', (req, res) => indicadorController.tempoMedio(req, res));

module.exports = router;
