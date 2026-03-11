class AppError extends Error {
    constructor(mensagem, statusCode = 500) {
        super(mensagem);
        this.mensagem = mensagem;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;
