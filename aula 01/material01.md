
# **API - Node.js e MySQL**

Este material aborda como criar uma API simples utilizando **Node.js** com **Express** e **MySQL**. A API permitirá realizar operações de CRUD (Criar, Ler, Atualizar, Excluir).

## **O que é uma API?**

Uma **API (Interface de Programação de Aplicações)** é um conjunto de regras e definições que permite que softwares diferentes se comuniquem entre si. As APIs são amplamente usadas para conectar sistemas e permitir a troca de dados de forma estruturada.


## **O que é Node.js?**

O **Node.js** é um ambiente de execução JavaScript que permite rodar JavaScript no servidor. Ao invés de rodar no navegador, como ocorre comumente, o Node.js permite que você crie aplicativos de back-end, sendo bastante eficiente e escalável.

## **Configuração do Ambiente Node.js**

### **1. Instalar Node.js**

Primeiro, instale o **Node.js** em seu ambiente. Você pode baixar a versão mais recente [aqui](https://nodejs.org/).

### **2. Inicializar o projeto**

Crie uma nova pasta para o seu projeto e com o terminal dentro da pasta inicialize o **npm** com o comando:

```bash
mkdir restaurante
cd restaurante
npm init -y
```

Isso criará o arquivo `package.json` com as configurações padrão do seu projeto.

### **3. Instalar dependências**

Em seguida, instale as dependências necessárias:

```bash
npm install express mysql2 body-parser cors
```

- **express**: Framework para criar o servidor HTTP.
- **mysql2**: Biblioteca para conectar-se ao banco de dados MySQL.
- **body-parser**: Middleware para ler o corpo das requisições HTTP.

## **Conexão com o Banco de Dados**

**Instalar MySQL**
Crie e suba o banco de dados antes de continuar -> [criar banco de dados](../databases/criar-banco-dados.md)

Crie um arquivo `db.js` na pasta restaurante, para gerenciar a conexão com o banco de dados MySQL.
 
```javascript
const mysql = require('mysql2/promise'); // Importa o módulo mysql2

// Criação da conexão com o banco de dados
const conexao = mysql.createPool({
  host: 'localhost', // Seu host (pode ser localhost)
  user: 'root',      // Seu usuário do MySQL
  password: '',      // Sua senha do MySQL
  database: 'sistema_reservas' // Nome do banco de dados
});

// função para testar a conexão
async function testarConexao() {
    try {
        await conexao.query('SELECT 1');
        console.log('Conexão com o banco de dados realizada com sucesso!');
    } catch (erro) {
        console.error('Erro ao se conectar ao banco de dados: ' + erro);
    }
}

testarConexao(); // Testa a conexão

module.exports = conexao;
```

Este código estabelece a conexão com o banco de dados MySQL. Caso a conexão falhe, o erro será exibido no console.

Para testar a conexão, podemos executar o codigo abaixo no terminal:

```bash
node db.js
```

## **Configuração do Servidor Express**

Agora, crie o arquivo `server.js` em restaurante, para configurar o servidor e as rotas da API.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(bodyParser.json()); // Analisa o corpo das requisições como JSON
app.use(cors()); // Permite requisições de outros domínios

// Rota básica para testar
app.get('/', (req, res) => {
  res.send('API de Reservas do Restaurante');
});

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

Esse arquivo configura o servidor Express, define a rota principal e inicializa o servidor na porta 3000.

## **Testando o servidor**
Para testar, execute o comando:

```bash
node server.js
```
servidor funcionando...

proximos passos: criar as rotas especificas para realizar as operações de CRUD.
