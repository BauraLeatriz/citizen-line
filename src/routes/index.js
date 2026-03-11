const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const chamadoRoutes = require('./chamadoRoutes');
const indicadorRoutes = require('./indicadorRoutes');
const relatorioRoutes = require('./relatorioRoutes');

// Registrar rotas de autenticação
router.use('/auth', authRoutes);
router.use('/chamados', chamadoRoutes);
router.use('/indicadores', indicadorRoutes);
router.use('/relatorios', relatorioRoutes);

module.exports = router;