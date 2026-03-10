const express = require('express');
const router = express.Router();

const indicadorController = require('../controllers/indicadorController');

router.get('/', indicadorController.obterTodos.bind(indicadorController));
router.get('/categoria', indicadorController.porCategoria.bind(indicadorController));
router.get('/status', indicadorController.porStatus.bind(indicadorController));
router.get('/cep', indicadorController.porCep.bind(indicadorController));
router.get('/tempo-medio', indicadorController.tempoMedio.bind(indicadorController));

module.exports = router;
