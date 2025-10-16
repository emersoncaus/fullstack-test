from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

alunos_data = [
    {
        "id": 1,
        "nome": "Joao Silva",
        "matricula": "2023001",
        "notas": [8.5, 7.0, 9.2]
    },
    {
        "id": 2,
        "nome": "Maria Oliveira",
        "matricula": "2023002",
        "notas": [6.0, 7.5, 8.0]
    },
    {
        "id": 3,
        "nome": "Pedro Souza",
        "matricula": "2023003",
        "notas": [9.5, 9.0, 10.0]
    },
    {
        "id": 4,
        "nome": "Ana Costa",
        "matricula": "2023004",
        "notas": [5.5, 6.5, 7.0]
    },
    {
        "id": 5,
        "nome": "Lucas Pereira",
        "matricula": "2023005",
        "notas": [7.8, 8.2, 7.5]
    }
]

@app.route('/api/alunos', methods=['GET'])
def get_alunos():
    """Retorna a lista de alunos com suas notas."""
    return jsonify(alunos_data)

@app.route('/', methods=['GET'])
def home():
    """Página inicial simples para verificar se a API está rodando."""
    return "API de Alunos está rodando. Acesse /api/alunos para os dados."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

