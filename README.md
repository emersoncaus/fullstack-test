# Teste Técnico Fullstack - Candidato

Este projeto é um teste técnico de desenvolvimento Fullstack, composto por um backend em .NET e um frontend em React.

## Objetivo do Teste

O objetivo principal deste teste é avaliar a sua capacidade de:
1.  Compreender e executar um projeto Fullstack simples.
2.  Implementar lógica de negócios.
3.  Manipular dados e exibi-los em uma interface de usuário.

**Sua Tarefa:**
O frontend já está configurado para buscar a lista de alunos e suas notas do backend. Sua tarefa é implementar a lógica para calcular a média das notas de cada aluno, exibi-la na coluna "Média" da tabela e ordenar a lista de alunos pela maior média.

## Estrutura do Projeto

O projeto está dividido em dois diretórios principais:

1.  `backend-dotnet/`: Contém a API RESTful em .NET Core.
2.  `frontend/aluno-app/`: Contém a aplicação de página única em React.

## 1. Configuração e Execução do Backend (.NET)

O backend é uma API simples que expõe um endpoint para obter os dados dos alunos.

### Pré-requisitos
*   .NET 8.0 SDK ou superior

### Passos para Execução

1.  **Navegue até o diretório do backend:**
    ```bash
    cd backend-dotnet
    ```

2.  **Execute a aplicação .NET:**
    ```bash
    dotnet run
    ```

    A API estará rodando em `http://localhost:5000`. O endpoint de dados é `http://localhost:5000/api/alunos`.

## 2. Configuração e Execução do Frontend (React)

O frontend é uma aplicação React criada com Vite.

### Pré-requisitos
*   Node.js (versão LTS recomendada)
*   npm (gerenciador de pacotes utilizado)

### Passos para Execução

1.  **Navegue até o diretório do frontend:**
    ```bash
    cd frontend/aluno-app
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute a aplicação React:**
    ```bash
    npm run dev
    ```

    A aplicação estará rodando em `http://localhost:5173` (ou outra porta, verifique o console).

---

## Observações

- **Backend Legado (Python):** O diretório `backend/` contém a versão original em Python/Flask, que foi substituída pela versão .NET em `backend-dotnet/`. Use o backend .NET para o teste.
- Certifique-se de que o backend está rodando antes de iniciar o frontend.



