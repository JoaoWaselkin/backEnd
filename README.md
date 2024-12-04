API de Contatos
Overview
A API de contatos e usuario foi desenvolvida em TypeScript, com atributos básicos de contato e usuario, para ser consumida em um Front-End criado pelos Alunos da UniFecaf, Repositório AQUI.

Estrutura do Projeto
 
 src/
controllers/         Lida com requisições HTTP
helpers/             Camadas auxiliares extras
migrations/          Criação das Tabelas no banco de dados
routes/              Define as rotas da aplicação
models/              Define as entidades do banco de dados
repositories/        Gerencia a interação com o banco de dados
services/            Contém a lógica de negócios
config/              Configuração da aplicação (e.g., variáveis de ambiente)
app.ts               Ponto de entrada da aplicação

Funcionalidades

Autenticação de Usuários
Rota para login, validando credenciais e retornando um token JWT
Integração com Frontend (opcional)
Disponível para gerenciar dados de acordo com a necessidade do frontend.


URLs
Abaixo, seguem as URLs para fazer as requisições de contatos no banco de dados Postgres, disponibilizado pelo professor em aula.

GET -> http://localhost:3000/api/contacts

POST -> http://localhost:3000/api/contacts

PUT -> http://localhost:3000/api/contacts/id

DELETE -> http://localhost:3000/api/contacts/id

Exemplo de JSON base
  Para realizar um GET

URL base: " http://localhost:3000/api/contacts "

Para realizar um POST

{
  "name": "Caíque",
  "email": "example@gmail.com",
  "telefone": "XXXXX-XXXX",
  "image": "url-de-imagens"
}
Para realizar um PUT

Id passado como parâmetro na URL +
{
  "name": "Jao",
  "email": "exampleEmail@gmail.com",
  "telefone": "XXXXX-XXXX",
  "image": "url-de-imagens"
}
Para realizar um DELETE

Id passado como parâmetro na URL " http://localhost:3000/api/contacts/${id} "

URLs
Abaixo, seguem as URLs para fazer as requisições de usuarios no banco de dados Postgres, disponibilizado pelo professor em aula.

GET -> http://localhost:3000/api/users

POST -> http://localhost:3000/api/users

Exemplo de JSON base
  Para realizar um GET

URL base -> http://localhost:3000/api/users "

Para realizar um POST

{
  "name": "Caíque",
  "email": "example@gmail.com",
  "password": "SenhaTeste",
}

URL para fazer a requisição de cadastrar um usuario, gerando uma PasswordHash
Post -> http://localhost:3000/api/register

Tecnologias utilizadas
TypeScript
Postgres
Postman
Git

Contribuição
João Roberto
Pablo Henry
Caique Rodrigues
Luiz Henrique

Arquivos no gitignore
  node_modules
  package-lock.json
  .env