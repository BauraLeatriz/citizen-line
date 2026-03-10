
const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// ROTA POST DE AUTENTICACAO

//cadastro
//VALIDAR DADOS, HASH DA SENHA COM BCRYPT, SALVAR USUÁRIOS E RETORNAR TOKEN JWT

router.post('/cadastro', authController.register);

// login
//VERIFICAR E-MAIL = SENHA, GERAR JWT COM EXPIRAÇÃO, RETORNAR TOKEN

router.post('/login', authController.login);

module.exports = router;