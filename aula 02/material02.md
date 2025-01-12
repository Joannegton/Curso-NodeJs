# Aula 02

Para dar continuidade, vamos entender sobre requisições para o banco de dados e como podemos manipular essas requisições e receber os dados de volta pensando em assincronismo.

## **Async e Await**

O JavaScript é uma linguagem assíncrona, o que significa que as operações podem ser realizadas de forma não sequencial. Para lidar com operações assíncronas, podemos utilizar as palavras-chave `async` e `await` para tornar o código mais legível e fácil de entender.

Por exemplo, ao realizar operações de leitura e escrita em um banco de dados, podemos utilizar funções assíncronas e `await` para aguardar a conclusão da operação antes de prosseguir com o código.

```javascript
async function getUser(id) {
    try {
        const user = await findById(id);
        return user;
    } catch (error) {
        console.error(error);
    }
}
```

Neste exemplo, a função `getUser` é assíncrona e utiliza `await` para aguardar a conclusão da operação de busca do usuário no banco de dados antes de retornar o resultado. Caso ocorra um erro durante a operação, o bloco `catch` captura a exceção e exibe uma mensagem de erro no console.

O uso de `async`, `await` e `try`, `catch` facilita a escrita de código assíncrono em JavaScript, tornando-o mais legível e fácil de entender.

## **Rotas no Express**

As rotas no Express são usadas para definir os endpoints da API (localhost:3000/rota). Cada rota responde a um método HTTP específico (GET, POST, PUT, DELETE) e executa uma função quando a rota é acessada.

```javascript
app.get('/rota', async (req, res) => {
    const query = 'SELECT * FROM tabela';

    try {
        // execução da query e envio da resposta
    } catch (error) {
        // blocos de erros
    }
});
```

Neste exemplo, `/rota` é o endpoint da API que responde a uma requisição GET. `async (req, res) => {...}` é a função assíncrona que será executada quando a rota for acessada.

As rotas no Express são uma forma eficiente de organizar e gerenciar os endpoints da API, facilitando a implementação de operações assíncronas e o tratamento de erros.

### **Tipos de Rotas**

- **GET**: Usado para recuperar dados do servidor.
- **POST**: Usado para enviar dados ao servidor.
- **PUT**: Usado para atualizar dados no servidor.
- **DELETE**: Usado para deletar dados no servidor.

### **Exemplos de Rotas**

#### **GET /clientes**

```javascript
const conexao = require('./conexao');

app.get('/clientes', async (req, res) => {
    const query = 'SELECT nome, email, telefone FROM clientes';

    try {
        const [clientes] = await conexao.query(query);
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao localizar clientes', error: error.message });
    }
});
```

Neste exemplo, a rota `/clientes` responde a uma requisição GET e executa uma função assíncrona que busca os dados dos clientes no banco de dados e retorna os clientes em formato JSON. Caso ocorra um erro durante a operação, a rota retorna um status 500 e uma mensagem de erro.

#### Hash de Senhas com `bcryptjs`

O uso de hashes para armazenar senhas garante que mesmo que o banco de dados seja comprometido, as senhas dos usuários não estarão diretamente acessíveis. Para isso, utilizaremos a biblioteca `bcryptjs`.

##### **Instalação do bcryptjs**

Execute o seguinte comando para instalar a biblioteca:

```bash
npm install bcryptjs
```

**Hash de Senhas**

O código abaixo demonstra como gerar o hash de uma senha:

```javascript
const bcrypt = require('bcryptjs');

const senha = '123456'; // Senha do usuario
const hashSenha = bcrypt.hashSync(senha, 10); // 10 é o número de salt rounds
console.log(hashSenha); // Resultado: senha criptografada
```

**Comparação de Senhas**

Para comparar uma senha fornecida com um hash armazenado, geralmente para realizar autenticação:

```javascript

const senhaFornecida = '123456'; // Senha fornecida pelo usuario
const senhaCorreta = bcrypt.compareSync(senhaFornecida, hashSenha);
```

Se a senha fornecida for igual à senha armazenada, a variável `senhaCorreta` será `true`, caso contrário, será `false`.

#### **POST /clientes**

```javascript
app.post('/clientes', async (req, res) => {
    const { nome, telefone, email, senha, data_cadastro } = req.body;
    const query = 'INSERT INTO clientes(nome, telefone, email, senha, data_cadastro) VALUES (?, ?, ?, ?, ?)';

    try {
        const hashSenha = bcrypt.hashSync(senha, 10);
        await conexao.query(query, [nome, telefone, email, hashSenha, data_cadastro]);
        res.status(201).json({ message: 'Cliente cadastrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar cliente', error: error.message });
    }
});
```

Neste exemplo, a rota `/clientes` responde a uma requisição POST e executa uma função assíncrona que insere um novo cliente no banco de dados com base nos dados recebidos no corpo da requisição. Caso ocorra um erro durante a operação, a rota retorna um status 500 e uma mensagem de erro.


#### **PUT /clientes/:id**

```javascript
app.put('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    const { nome, telefone, email, senha, data_cadastro } = req.body;
    const query = 'UPDATE clientes SET nome = ?, telefone = ?, email = ?, senha = ?, data_cadastro = ? WHERE id = ?';

    try {
        await conexao.query(query, [nome, telefone, email, senha, data_cadastro, id]);
        res.status(200).json({ message: 'Cliente atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar cliente', error: error.message });
    }
});
```

Neste exemplo, a rota `/clientes/:id` responde a uma requisição PUT e executa uma função assíncrona que atualiza os dados de um cliente no banco de dados com base no ID fornecido na URL e nos dados recebidos no corpo da requisição. Caso ocorra um erro durante a operação, a rota retorna um status 500 e uma mensagem de erro.

#### **DELETE /clientes/:id**

```javascript
app.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM clientes WHERE id = ?';

    try {
        await conexao.query(query, [id]);
        res.status(200).json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar cliente', error: error.message });
    }
});
```

Neste exemplo, a rota `/clientes/:id` responde a uma requisição DELETE e executa uma função assíncrona que deleta um cliente no banco de dados com base no ID fornecido na URL. Caso ocorra um erro durante a operação, a rota retorna um status 500 e uma mensagem de erro.

