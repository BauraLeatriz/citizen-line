const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const chamadoRoutes = require('./chamadoRoutes');
const indicadorRoutes = require('./indicadorRoutes');

// Registrar rotas de autenticação
router.use('/auth', authRoutes);
router.use('/chamados', chamadoRoutes);
router.use('/indicadores', indicadorRoutes);

module.exports = router;