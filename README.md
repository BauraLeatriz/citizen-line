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
PUT - '/chamados/:id/status' - Atualizar status
DELETE - '/chamados/:id' - Deletar chamado
GET - '/chamados/:id/historico' - Ver histórico


#### Indicadores


GET	- '/indicadores' - Todos os indicadores
GET	- '/indicadores/categoria' - Por categoria
GET	- '/indicadores/status' - Por status
GET	- '/indicadores/cep' - Por CEP
GET	- '/indicadores/tempo-medio' - Tempo médio de resolução


#### Relatórios

GET - '/relatorios' - Todos os chamados
GET - '/relatorios/' - Filtrar por status
GET - '/relatorios/' - Filtrar por período
GET - '/relatorios/' - Combinar filtros