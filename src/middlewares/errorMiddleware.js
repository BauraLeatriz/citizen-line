const AppError = require('../utils/AppError');

function errorMiddleware(err, req, res, next) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            erro: err.mensagem
        });
    }

    console.error('ERRO NÃO TRATADO:', err);

    return res.status(500).json({
        erro: 'Erro interno do servidor.'
    });
}

module.exports = { errorMiddleware };


