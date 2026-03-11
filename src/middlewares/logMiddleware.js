function logMiddleware(req, res, next) {
    const inicio = Date.now();

    res.on('finish', () => {
        const duracao = Date.now() - inicio;
        const data = new Date().toISOString();

        console.log(`[${data}] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - ${duracao}ms`);
    });

    next();
}

module.exports = {logMiddleware};