// Importe jsonwebtoken para gerar e validar tokens quando necessario.
// Leia a chave de assinatura via process.env.JWT_SECRET.
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const userRepo = require('../repositories/usuariosRepository')

require('dotenv').config();

// adicionar bcrypt
const bcrypt = require('bcrypt');

// Se a chave nao existir, aplique fail-fast (erro ao iniciar a aplicacao).

if (!JWT_SECRET) {
    console.error('FATAL ERROR: JWT_SECRET não encontrado no ambiente!');
    process.exit(1);
}

// validacao de credenciais e geracao de token.
function gerarToken(usuario) {
    const payload = {
        id: usuario.id,
        nome: usuario.nome,
        role: usuario.role
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// Se optar por DAO/Repository no futuro, mantenha o service como camada de 
// orquestracao da regra de negocio.

class authService {

    async registrar({nome, email, senha}) {
        if (!nome || !email || !senha) {
            throw new Error('Nome, E-mail e Senha são obrigatórios.');
        }

        const contaExistente = await userRepo.consultarEmail(email);
        if (contaExistente){
            throw new Error('E-mail já cadastrado!');
        }

        const senha_hash = await bcrypt.hash(senha, 10);

        const usuario = await userRepo.criarUsuario({ nome, email, senha_hash });
        return usuario;
    }

    async login ({ email, senha}){
        if (!email || !senha){
            throw new Error('E-mail e Senha são obrigatórios!');
        }

        const usuario = await userRepo.consultarEmail(email);

        if (!usuario){
            throw new Error('Credenciais inválidas.');
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
        if(!senhaValida){
            throw new Error('Credenciais inválidas.');
        }

        const token = gerarToken(usuario);
        return { usuario, token };
    }
}

module.exports = new authService();