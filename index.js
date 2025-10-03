import axios from 'axios';

// URL de TESTE SIMULANDO uma API com dados em formato JSON
const TEST_API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

async function getTestData() {
  try {
    console.log(`Buscando dados de teste em: ${TEST_API_URL}...`);

    const response = await axios.get(TEST_API_URL);
    const { data } = response;

    console.log(' Conexão bem-sucedida! Dados de teste recebidos.');

    console.log('\n--- Dados de Teste Recebidos ---');
    console.log('Título do Post:', data.title);
    console.log('ID do Usuário:', data.userId);
    console.log('-------------------------------');
  } catch (error) {
    console.error('Erro inesperado:', error.message);
  }
}

getTestData();
