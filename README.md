# API de Autenticação
API simples com Fastify, Prisma, SQLite e JWT para autenticação de usuários.

## Tecnologias Utilizadas
- **Fastify**: Framework web rápido e eficiente.
- **Prisma**: ORM para manipulação do banco de dados.
- **SQLite**: Banco de dados leve e fácil de usar.
- **JWT**: JSON Web Tokens para autenticação segura.

## Como Rodar
1. Instale as dependências:
    ```sh
    npm install
    ```
2. Configure o banco de dados:
    ```sh
    npx prisma db push
    ```
3. Inicie o servidor:
    ```sh
    npm start
    ```

## Endpoints
- **POST /login**: Autenticação de usuário.
- **POST /register**: Registro de novo usuário.
- **GET /protected**: Obtenção da página protegida e do usuário autenticado.
- **GET /health**: Obtenção do status da API

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está licenciado sob a licença MIT.
