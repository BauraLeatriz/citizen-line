# Citizen Line - Plataforma de Atendimento Cominitário 

Linha Cidadã é um projeto que promete integrar instituições públicas e os membros da comunidade através de uma Central Comunitária de Chamados. Este Projeto trás o Backend da Central Comunitária de Atendimento — Atividade Final Integradora do curso Back-End com Javascript, Bolsa Fulturo Digital.

Pode ser utilizada para abertura, gestão e acompanhamento de chamados (falta de energia, vazamentos, quedas de árvore, etc.).

## Funcionamento

## Configurar Variáveis de Ambiente

## Iniciar Servidor

## Autenticação

### Endpoints

#### Auth 

POST - '/auth/cadastro' - Cadastro de usuários
POST - '/auth/login' - Login (com retorno do Token JWT, conforme exigido)

#### Chamados

POST - '/chamados' - Criar chamado
GET - '/chamados/:id' - Buscar por ID
PUT - '/api/chamados/:id/status' - Atualizar status
DELETE - '/api/chamados/:id' - Deletar chamado
GET - '/api/chamados/:id/historico' - Ver histórico