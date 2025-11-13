# Backend .NET - API de Alunos

Este é o backend em .NET Core que substitui a versão Python (Flask) do projeto.

## Pré-requisitos

- .NET 8.0 SDK ou superior

## Como executar

1. **Navegue até o diretório do backend .NET:**
   ```bash
   cd backend-dotnet
   ```

2. **Restaure as dependências (opcional, feito automaticamente no run):**
   ```bash
   dotnet restore
   ```

3. **Execute a aplicação:**
   ```bash
   dotnet run
   ```

A API estará rodando em `http://0.0.0.0:5000` (ou `http://localhost:5000`).

## Endpoints

- **GET `/`** - Retorna mensagem indicando que a API está rodando
- **GET `/api/alunos`** - Retorna a lista de alunos com suas notas em formato JSON

## Funcionalidades

- ✅ CORS habilitado para comunicação com o frontend
- ✅ Dados idênticos ao backend Python original
- ✅ Mesmos endpoints e respostas JSON
- ✅ Roda na mesma porta (5000) para compatibilidade com o frontend
