const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const chamadoRoutes = require('./chamadoRoutes');

// Registrar rotas de autenticação
router.use('/auth', authRoutes);
router.use('/chamados', chamadoRoutes);

module.exports = router;