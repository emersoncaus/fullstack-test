var builder = WebApplication.CreateBuilder(args);

// Adiciona serviços CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Habilita CORS
app.UseCors();

// Dados dos alunos (idêntico ao backend Python)
var alunosData = new[]
{
    new
    {
        id = 1,
        nome = "Joao Silva",
        matricula = "2023001",
        notas = new[] { 8.5, 7.0, 9.2 }
    },
    new
    {
        id = 2,
        nome = "Maria Oliveira",
        matricula = "2023002",
        notas = new[] { 6.0, 7.5, 8.0 }
    },
    new
    {
        id = 3,
        nome = "Pedro Souza",
        matricula = "2023003",
        notas = new[] { 9.5, 9.0, 10.0 }
    },
    new
    {
        id = 4,
        nome = "Ana Costa",
        matricula = "2023004",
        notas = new[] { 5.5, 6.5, 7.0 }
    },
    new
    {
        id = 5,
        nome = "Lucas Pereira",
        matricula = "2023005",
        notas = new[] { 7.8, 8.2, 7.5 }
    }
};

// Endpoint raiz
app.MapGet("/", () => "API de Alunos está rodando. Acesse /api/alunos para os dados.");

// Endpoint de alunos
app.MapGet("/api/alunos", () => Results.Json(alunosData));

app.Run("http://0.0.0.0:5000");
