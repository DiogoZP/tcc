# Gestão de Frotas

Projeto desenvolvido como trabalho de conclusão de curso para formação de tecnólogo em Análise e Desenvolvimento de Sistemas cursado no IFSP campus Catanduva.  
Aplicativo para gerenciar frotas de veículos, incluindo cadastro de veículos e motoristas, agendamento de manutenção, controle de portaria e upload de documentos.

## Funcionalidades

-   **Cadastro de Veículos:** Gerencie informações de veículos, incluindo marca, modelo, ano, placa, tipo (carro, caminhão, etc.) e histórico de manutenção.

-   **Cadastro de Motoristas:** Registre motoristas com dados como nome, CPF, RG, categoria e validade da CNH, telefone e setor de trabalho.

-   **Manutenção de Veículos:** Agende e registre o histórico de manutenções, controle de peças e serviços realizados.

-   **Controle de Portaria:** Registre entradas e saídas de veículos e motoristas, com detalhes sobre horários e destinos.

-   **Upload de Documentos:** Anexe e armazene documentos importantes relacionados a veículos e motoristas (CNH, CRLV, etc.).

## Tecnologias Utilizadas

-   Backend: NestJS
-   Frontend: React com Mantine
-   Banco de Dados: MariaDB
-   ORM: Prisma
-   Autenticação: JWT para autenticação de usuários
-   Validação de Formulários: Zod e React Hook Forms

## Instalação

1. Clone o repositório:
```console
git clone https://github.com/DiogoZP/tcc
```

2. Instale as dependências no backend
```console
cd api
npm install
```

3. Configure as variáveis de ambiente no arquivo .env.example como desejar
```
# URL ou caminho para o banco de dados

DATABASE_URL="file:./dev.db"
```

4. Remova o .example do arquivo env para que as variáveis possam ser acessadas

5. Execute as migrações do banco de dados:
```console
npx prisma migrate dev
```

6. Instale as dependências no frontend
```console
cd ../app
npm install
```

## Scripts

**App:**

Executa o frontend em modo de desenvolvimento atualizando as modificações em tempo real:
```console
npm run dev
```
**Api:**

Executa a api em modo de desenvolvimento atualizando as modificações em tempo real:
```console
npm run dev
```
Executa testes unitários utilizando a biblioteca jest:
```console
npm run test
```

## Documentação com Swagger
Enquanto a api estiver sendo executada acesse a url http://localhost:3000/docs para ter acesso a sua documentação feita utilizando o swagger.

## Participantes

**Diogo Zago de Paula**  
✉ - diogozago04@gmail.com  
🔗 - [linkedin.com/in/diogo-zago/](https://www.linkedin.com/in/diogo-zago/)

**Pedro Ap. Possari**  
✉ - pedropossari2@gmail.com  
🔗 - [linkedin.com/in/pedro-possari/](https://www.linkedin.com/in/pedro-possari/)

