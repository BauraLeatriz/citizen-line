// Importe o authService para delegar regras de negocio.
const authService = require('../services/authService');
// Defina o controller de autenticacao.
// O controller deve orquestrar entrada/saida HTTP, sem implementar regra de negocio.


class authController{

    //Metodo registar:
    async register(req, res){
        try {
            const usuario = await authService.registrar(req.body);

            return res.status(201).json({
                mensagem: 'Usuário criado com sucesso',
                usuario
            });
        } catch (erro) {
            return res.status(400).json({ erro: erro.message });
        }
    }
    
    // Metodo login:
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            if (!email || !senha) {
                return res.status(400).json({ erro: 'Email e Senha são obrigatórios' });
            }

            const { usuario, token } = await authService.login({ email, senha });
            
            console.log(`LOGIN REALIZADO: TOKEN EMITIDO PARA ${usuario.nome}. ROLE: ${usuario.role}`);
            return res.json({ mensagem: 'Login realizado com sucesso!', token });
        } catch (erro) {
            return res.status(401).json({ erro: erro.message });
        }
    }
}

module.exports = new authController(); 