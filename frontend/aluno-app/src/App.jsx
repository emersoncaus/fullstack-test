import React, { useState, useEffect } from 'react';
import './App.css';

// URL da API Flask
const API_URL = 'http://127.0.0.1:5000/api/alunos';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAlunos(data);
      setError(null);
    } catch (e) {
      console.error("Erro ao buscar alunos:", e);
      setError("Não foi possível conectar à API. Certifique-se de que o backend Flask está rodando em http://127.0.0.1:5000.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Carregando dados dos alunos...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Alunos (Teste Fullstack)</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matrícula</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notas</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Média</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{aluno.matricula}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aluno.notas.join(', ')}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="text-red-500 font-semibold">A implementar</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        <strong>Instrução para o Candidato:</strong> Implemente a lógica para calcular e exibir a média final do aluno na coluna "Média" e ordene os alunos pela média.
      </p>
    </div>
  );
}

export default App;

