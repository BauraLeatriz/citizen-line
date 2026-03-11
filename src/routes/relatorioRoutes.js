const express = require('express');
const router = express.Router();

const relatorioController = require('../controllers/relatorioController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, (req, res) => relatorioController.gerarRelatorio(req, res));

module.exports = router;