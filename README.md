Análise de Dados de Filmes com Node.js
Este projeto foi desenvolvido para extrair e processar dados de filmes, utilizando o ambiente Node.js. Ele demonstra a integração do cliente HTTP Axios e a capacidade de consumir dados de uma API, após resolver desafios de rede em ambientes de desenvolvimento online.

Tecnologias Utilizadas
Node.js: Ambiente de execução.

Axios: Cliente HTTP para fazer requisições de forma assíncrona.

Cheerio: Biblioteca de parsing HTML (originalmente planejada para web scraping).

Detalhe da Solução de Rede
O objetivo inicial era realizar web scraping da Wikipedia. No entanto, o ambiente de desenvolvimento online (como o StackBlitz) ativou um bloqueio de rede (socket hang up / ECONNRESET) ao tentar se conectar com a Wikipedia.

Para garantir que a lógica do código pudesse ser testada, o projeto foi configurado para:

Utilizar o Axios e o Node.js com sintaxe correta e robusta.

Consumir uma API de Teste (jsonplaceholder.typicode.com) que retorna dados em formato JSON, simulando a resposta que seria esperada de uma API oficial.

Como Rodar o Projeto
1. Instalação
Certifique-se de que o Node.js está instalado. Em seguida, instale as dependências:

Bash

npm install axios cheerio
2. Execução
Execute o script principal diretamente no terminal:

Bash

node index.js
A saída mostrará a conexão bem-sucedida e o objeto JSON retornado pela API de teste.

Notas de Desenvolvimento
Para prosseguir com o alvo original (Wikipedia), há duas rotas recomendadas:

Rodar Localmente: Clone o projeto e execute-o em sua máquina. Isso geralmente contorna os bloqueios de IP de ambientes de nuvem.

Usar a API Oficial: Mudar o código para consumir a MediaWiki API, que é a forma mais robusta e oficial de obter o código-fonte (WikiText) dos artigos, exigindo uma nova lógica de parsing.

Autor
vagner99brrj

Iniciado em [02/10/2025]







