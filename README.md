# Forum API

## Descrição do Projeto

A **Forum API** é uma aplicação backend desenvolvida com **NestJS**, criada com o objetivo de aprender este framework poderoso e modular. O projeto simula a estrutura de um fórum online, permitindo que usuários criem contas, publiquem perguntas e respondam interações dentro da comunidade.

Durante o desenvolvimento foram implementados conceitos essenciais como arquitetura em camadas, autenticação e autorização, além do uso de ORM com **Prisma** para manipulação de dados.

A aplicação também conta com boas práticas como encriptação de senhas com **bcrypt**, criação e validação de tokens JWT, além do uso de **Guards** e **Pipes** nativos do NestJS para validação e segurança.

## Principais Funcionalidades

- **CRUD de Usuários (Users):**
  - Criação de contas com senha encriptada.
  - Login seguro com JWT.
  - Atualização e exclusão de perfis.

- **CRUD de Perguntas (Questions):**
  - Usuários autenticados podem criar perguntas.
  - Atualização e remoção das próprias perguntas.
  - Relacionamento direto com o autor da pergunta.

- **CRUD de Respostas (Answers):**
  - Usuários autenticados podem responder perguntas.
  - Atualização e remoção das próprias respostas.
  - Associação direta entre pergunta e resposta.

- **Autenticação Segura:**
  - Registro com validação.
  - Login com JWT.
  - Proteção de rotas com **AuthGuard**.
  - Uso de **bcrypt** para hashing de senhas.

- **Validações com Pipes do NestJS:**
  - Garantia de entrada de dados segura e padronizada.
  - Tratamento de erros para respostas consistentes.

## Modelagem de Dados

A modelagem foi feita com **Prisma ORM** utilizando **SQLite** como banco de dados.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Users {
  id        Int         @id @default(autoincrement())
  email     String      @unique
  name      String?
  password  String
  createdAt DateTime    @default(now())
  updatedAt DateTime    @updatedAt
  questions Questions[]
  answers   Answers[]
}

model Questions {
  id        Int       @id @default(autoincrement())
  title     String
  body      String
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  userId    Int
  user      Users     @relation(fields: [userId], references: [id])
  answers   Answers[]
}

model Answers {
  id         Int       @id @default(autoincrement())
  body       String
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt
  userId     Int
  questionId Int
  user       Users     @relation(fields: [userId], references: [id])
  question   Questions @relation(fields: [questionId], references: [id])
}
```

## Dependências

O projeto utiliza as seguintes dependências principais:

- `@nestjs/common`: ^11.0.1,
- `@nestjs/core`: ^11.0.1,
- `@nestjs/jwt`: ^11.0.0,
- `@nestjs/mapped-types`: \*,
- `@nestjs/platform-express`: ^11.0.1,
- `@prisma/client`: ^6.16.2,
- `bcrypt`: ^6.0.0,
- `class-transformer`: ^0.5.1,
- `class-validator`: ^0.14.2,
- `reflect-metadata`: ^0.2.2,
- `rxjs`: ^7.8.1,
- `@eslint/eslintrc`: ^3.2.0,
- `@eslint/js`: ^9.18.0,
- `@nestjs/cli`: ^11.0.0,
- `@nestjs/schematics`: ^11.0.0,
- `@nestjs/testing`: ^11.0.1,
- `@types/bcrypt`: ^6.0.0,
- `@types/express`: ^5.0.0,
- `@types/jest`: ^30.0.0,
- `@types/node`: ^22.10.7,
- `@types/supertest`: ^6.0.2,
- `eslint`: ^9.18.0,
- `eslint-config-prettier`: ^10.0.1,
- `eslint-plugin-prettier`: ^5.2.2,
- `globals`: ^16.0.0,
- `jest`: ^30.0.0,
- `prettier`: ^3.4.2,
- `prisma`: ^6.16.2,
- `source-map-support`: ^0.5.21,
- `supertest`: ^7.0.0,
- `ts-jest`: ^29.2.5,
- `ts-loader`: ^9.5.2,
- `ts-node`: ^10.9.2,
- `tsconfig-paths`: ^4.2.0,
- `typescript`: ^5.7.3,
- `typescript-eslint`: ^8.20.0,

## Como Executar o Projeto

1. Clone este repositório:

```bash
git clone https://github.com/pedrohxiv/forum-api.git
cd forum-api
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```env
DATABASE_URL="file:./dev.db"
SECRET_KEY="sua_chave_secreta_aqui"
```

4. Rode as migrações do Prisma para criar o banco de dados:

```bash
npx prisma migrate dev --name init
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run start:dev
```

6. Acesse a API em:

```
http://localhost:3000
```

## Rotas Principais

- **Users**
  - `POST /users` → Criação de usuário.
  - `POST /auth/signin` → Login e geração de token JWT.
  - `GET /users` → Lista todos os usuários.
  - `GET /users/:id` → Retorna informações do usuário.
  - `PATCH /users/:id` → Atualiza informações do usuário.
  - `DELETE /users/:id` → Remove usuário.

- **Questions**
  - `POST /questions` → Criação de pergunta.
  - `GET /questions` → Lista todas as perguntas.
  - `GET /questions/:id` → Detalhes de uma pergunta específica.
  - `PATCH /questions/:id` → Atualiza uma pergunta.
  - `DELETE /questions/:id` → Remove uma pergunta.

- **Answers**
  - `POST /answers/:questionId` → Criação de resposta.
  - `GET /answers` → Lista todas as respostas.
  - `GET /answers/:id` → Detalhes de uma resposta específica.
  - `PATCH /answers/:id` → Atualiza uma resposta.
  - `DELETE /answers/:id` → Remove uma resposta.

## Aprendizados

Este projeto foi desenvolvido como forma de aprendizado do **NestJS** e das boas práticas no desenvolvimento de APIs modernas.
Entre os principais pontos aprendidos estão:

- Estrutura modular do NestJS.
- Implementação de autenticação JWT.
- Uso de Guards, Pipes e Decorators nativos.
- Integração do Prisma ORM com SQLite.
- Implementação de CRUD completo e relacionamentos entre entidades.
- Encriptação de senhas e boas práticas de segurança.