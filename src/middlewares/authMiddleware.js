// Importe jsonwebtoken para validar tokens enviados no cabecalho.

const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// Crie middleware de autenticacao:

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.log('Autenticação negada por ausência do header Authorization!');
        return res.status(401).json({ erro: 'Token não enviado' });
    }


// 1) Ler o token (ex.: Authorization: Bearer ...).

 const [scheme, token] = authHeader.split(' ');
    if (scheme !== 'Bearer' || !token) {
        console.log('Formato de token inválido, esperado Bearer Token');
        return res.status(401).json({ 
            erro: 'Formato de token inválido' 
        });
    }

// 2) Validar assinatura com JWT_SECRET.
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        console.log(`Usuário: ${payload.nome} autenticado como ${payload.role}.`);
        return next();
    } catch (erro) {
        console.log(`Token Rejeitado Motivo ${erro.message}`);
        return res.status(403).json({ 
            erro: 'Token inválido ou expirado' 
        });
    }
}

//FAZER AUTH EM TODAS AS ROTAS PRIVADAS

module.exports = {authMiddleware};