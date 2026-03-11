# Citizen Line - Plataforma de Atendimento Cominitário 

Linha Cidadã é um projeto que promete integrar instituições públicas e os membros da comunidade através de uma Central Comunitária de Chamados. Este Projeto trás o Backend da Central Comunitária de Atendimento — Atividade Final Integradora do curso Back-End com Javascript, Bolsa Fulturo Digital.

Pode ser utilizada para abertura, gestão e acompanhamento de chamados (falta de energia, vazamentos, quedas de árvore, etc.).

## Funcionamento

A API utiliza Node.js para funcionar. Além do ambiente node, é necessário instalar algumas dependências.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)

### Instalação

* Clone o repositório
git clone https://github.com/BauraLeatriz/citizen-line.git

* Entre na pasta do projeto
cd citizen-line

* Instale as dependências
npm install


### Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

env
PORT=8080
JWT_SECRET=sua-chave-secreta
NODE_ENV=development
DB_PATH=./database/app.db

O mais importante é a variável JWT_SECRET, a falta dela pode quebrar a aplicação.

### Iniciar o Servidor

node server.js

O servidor estará disponível em `http://localhost:8080` (ou na porta definida no `.env`).

## Arquitetura do projeto 

O código foi estrtuturado da seguinte forma:

- `src/config/`: Conexão com o banco de dados.
- `src/controllers/`: Responsáveis por pegar a requisição e devolver a resposta.
- `src/services/`: Aqui fica toda a regra de negócio, integrações e os design patterns (Factory, Observer).
- `src/repositories/`: As queries pro banco e demais informações sobre dados
- `src/middlewares/`: Autenticação via JWT e logs das rotas.
- `src/routes/`: Declaração e mapeamento de endpoints.
- `database/`: Arquivos SQL (criação das tabelas e seed inicial).


## Autenticação

A maioria das rotas é protegida. Depois de fazer o cadastro em e o login em `/auth/login`, você vai receber um token.
Você precisa mandar esse token no header pra conseguir usar a API: `Authorization: Bearer <seu-token-aqui>`.

## Endpoints
### Auth 

POST - '/auth/cadastro' - Cadastro de usuários
POST - '/auth/login' - Login (com retorno do Token JWT, conforme exigido)

### Chamados

POST - '/chamados' - Criar chamado
GET - '/chamados/:id' - Buscar por ID
PUT - '/chamados/:id/status' - Atualizar status
DELETE - '/chamados/:id' - Deletar chamado
GET - '/chamados/:id/historico' - Ver histórico

### Indicadores

GET	- '/indicadores' - Todos os indicadores
GET	- '/indicadores/categoria' - Por categoria
GET	- '/indicadores/status' - Por status
GET	- '/indicadores/cep' - Por CEP
GET	- '/indicadores/tempo-medio' - Tempo médio de resolução

### Relatórios

GET - '/relatorios' - Todos os chamados

Pode usar parametros para filtrar.

## Dados Iniciais 

Na primeira vez que o projeto for executado, as 7 categorias iniciais serão insergidas no banco de dados. Além de criar o usuário  administrador para testes mais rápidos.

- E-mail: `admin@comunidade.com`
- Senha: `admin123`

*Ambos podem ser modificados no arquivo seed.

## Integração ViaCEP 

O uso da API ViaCEP, faz com que o uso do CEP, as demais informações possam ser coletadas sozinhas. 
Para saber mais sobre a API, acesse: https://viacep.com.br/