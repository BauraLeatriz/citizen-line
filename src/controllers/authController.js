// Importe o authService para delegar regras de negocio.

// Defina o controller de autenticacao.
// O controller deve orquestrar entrada/saida HTTP, sem implementar regra de negocio.

// Metodo login:
// 1) Receber dados enviados no corpo da requisicao.
// 2) Chamar authService.login(...) (ou metodo equivalente).
// 3) Tratar sucesso e erro com status HTTP coerentes.

// No sucesso, retorne JSON com mensagem e token.
