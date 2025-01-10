nesse material, vamos entender sobre a organização do projeto e a estrutura de pastas de um projeto Node.js. Além disso, vamos aprender a criar rotas e controladores para a nossa API, permitindo a realização de operações de CRUD (Criar, Ler, Atualizar, Excluir) em um banco de dados MySQL.

## **Organização do Projeto**

A organização de um projeto Node.js é fundamental para manter a estrutura limpa e organizada. Existem várias formas de organizar um projeto, mas uma estrutura comum é a seguinte:

```plaintext    
projeto-nodejs/
│
├── node_modules/       # Pasta com as dependências do projeto
│
├── src/                # Pasta com o código-fonte do projeto
│   ├── controllers/    # Controladores da aplicação
│   ├── routes/         # Rotas da aplicação
│   ├── services/       # Serviços da aplicação
│   └── server.js       # Arquivo principal da aplicação
│
├── package.json        # Arquivo com as informações do projeto e dependências
└── README.md           # Arquivo com informações sobre o projeto
```

Neste exemplo, temos a pasta `src/` que contém os principais diretórios do projeto:

- `controllers/`: Responsável por controlar o fluxo da aplicação, recebendo as requisições HTTP e retornando as respostas adequadas.
- `routes/`: Define as rotas da aplicação, mapeando os endpoints e métodos HTTP para os controladores correspondentes.
- `services/`: Contém a lógica de negócio da aplicação, separando-a dos controladores.

O arquivo `server.js` é o ponto de entrada da aplicação, onde são configurados os middlewares, rotas e inicialização do servidor.

## **Criando Rotas, Serviços e Controladores**

Para criar rotas, serviços e controladores em uma aplicação Node.js, podemos utilizar o framework Express, que facilita o desenvolvimento de aplicações web. Vamos criar um exemplo simples para a nossa API.


### **1. Criando um Serviço**

Os serviços são responsáveis por encapsular a lógica de negócio da aplicação, separando-a dos controladores. Os serviços podem ser utilizados para realizar operações no banco de dados, processar dados, realizar cálculos, entre outras tarefas. Vamos criar um serviço simples para a nossa aplicação. Vamos criar um arquivo `helloService.js` na pasta `services/` com a seguinte estrutura:

```javascript
const helloService = () => {
    return 'Hello, World!';
};

module.exports = helloService;
```

Neste exemplo, criamos um serviço `helloService` que retorna a mensagem "Hello, World!".


### **2. Criando um Controlador**

O controlador é responsável por receber a requisição, processar os dados necessários e retornar a resposta adequada. Vamos criar na pasta `controller` um arquivo `helloController.js` que será um controlador simples  para a nossa rota `/hello`:

Para utilizar o serviço no controlador, basta importar o serviço e chamá-lo no controlador:

```javascript
const helloService = require('../services/helloService');

const helloController = (req, res) => {
    const message = helloService();
    res.send(message);
};

module.exports = helloController;
```

### **3. Criando uma Rota**

Para criar uma rota, basta utilizar um dos métodos HTTP disponíveis no Express (como `get`, `post`, `put`, `delete`) e definir o endpoint e a função de callback que será executada quando a rota for acessada. Podemos importar o controller para utilizar aqui. 
Vamos criar um arquivo `helloRouter.js` na pasta `routes/` com a seguinte estrutura: 

```javascript
const express = require('express');
const router = express.Router();
const helloController = require('../controllers/helloController');

router.get('/hello', helloController);

module.exports = router;
```

Neste exemplo, criamos uma rota `/hello` que retorna a mensagem "Hello, World!" quando acessada.

### **4. Configurando a Rota no Arquivo Principal**

Para configurar a rota no arquivo principal da aplicação (`server.js`), basta importar o arquivo de rotas e adicionar a rota ao Express:

```javascript
const express = require('express');
const helloRoute = require('./routes/hello');

const app = express();

app.use('/api', helloRoute);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
```

Neste exemplo, importamos o arquivo de rotas `hello.js` e adicionamos a rota `/hello` ao Express, acessível através do endpoint `/api/hello`.

Com esses passos, criamos uma rota e um controlador simples para a nossa aplicação Node.js. A partir desse exemplo, podemos expandir a aplicação e adicionar mais rotas e controladores para implementar as funcionalidades desejadas.

### **Async e await**

O JavaScript é uma linguagem assíncrona, o que significa que as operações podem ser realizadas de forma não sequencial. Para lidar com operações assíncronas, podemos utilizar as palavras-chave `async` e `await` para tornar o código mais legível e fácil de entender.

Por exemplo, ao realizar operações de leitura e escrita em um banco de dados, podemos utilizar funções assíncronas e `await` para aguardar a conclusão da operação antes de prosseguir com o código.

```javascript
async function getUser(id){
    const user = await User.findById(id);
    return user;
};
```

Neste exemplo, a função `getUser` é assíncrona e utiliza `await` para aguardar a conclusão da operação de busca do usuário no banco de dados antes de retornar o resultado.

O uso de `async` e `await` facilita a escrita de código assíncrono em JavaScript, tornando-o mais legível e fácil de entender.




