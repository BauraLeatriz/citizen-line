const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');

// Registrar rotas de autenticação
router.use('/auth', authRoutes);

module.exports = router;