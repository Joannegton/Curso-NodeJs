const express = require('express') // cria o servidor 
const bodyParser = require('body-parser') // analisa o corpo da requisição
const cors = require('cors') // permite que o servidor aceite requisições de outros domínios

const conexao = require('./db') // importa a conexão com o banco de dados

const app = express() // cria o servidor

app.use(bodyParser.json()) // analisa o corpo da requisição
app.use(cors()) // permite que o servidor aceite requisições de outros domínios


// rota para criar um novo cliente
app.post('/clientes', async (req, res) => {
    const {nome, telefone, email, senha, data_cadastro} = req.body
    const query = 'INSERT INTO clientes(nome, telefone, email, senha, data_cadastro) VALUES (?, ?, ?, ?, ?)'

    try {
        await conexao.query(query, [nome, telefone, email, senha, data_cadastro])
        res.status(201).json({message: 'Cliente cadastrado com sucesso'})
    } catch (error) {
        res.status(500).json({message: 'Erro ao cadastrar cliente', error: error.message})
    }
})

// rota para listar todos os clientes
app.get('/clientes', async (req, res) => {
    const query = 'SELECT id, nome, email, telefone FROM clientes'

    try {
        const [resultados] = await conexao.query(query) // [] pega a primeira posição e atribui a resultados
        res.status(200).json(resultados)
    } catch (error) {
        console.error('Erro ao localizar clientes:', error)
        res.status(500).json({message: 'Erro ao localizar clientes'})
    }
})
 
// rota para listar um cliente específico
app.get('/clientes/:id', async (req, res) => {
    const id = req.params.id
    const query = 'SELECT nome, email, telefone FROM clientes WHERE id = ?'

    try {
        const [resultado] = await conexao.query(query, [id])

        if (resultado.length > 0) {
            res.status(200).json(resultado[0])
        } else {
            res.status(404).json({message: 'Cliente não encontrado'})
        }
    } catch (error) {
        console.error('Erro ao localizar cliente:', error)
        res.status(500).json({message: 'Erro ao localizar cliente'})
    }
})

// rota para atualizar um cliente
app.put('/clientes/:id', async (req, res) => {
    const id = req.params.id
    const {nome, telefone, email, senha, data_cadastro} = req.body
    const query = 'UPDATE clientes SET nome = ?, telefone = ?, email = ?, senha = ?, data_cadastro = ? WHERE id = ?'

    try {
        await conexao.query(query, [nome, telefone, email, senha, data_cadastro, id])
        res.status(200).json({message: 'Cliente atualizado com sucesso'})
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error)
        res.status(500).json({message: 'Erro ao atualizar cliente'})
    }
})

// rota para deletar um cliente
app.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id
    const query = 'DELETE FROM clientes WHERE id = ?'

    try {
        await conexao.query(query, [id])
        res.status(200).json({message: 'Cliente deletado com sucesso'})
    } catch (error) {
        console.error('Erro ao deletar cliente:', error)
        res.status(500).json({message: 'Erro ao deletar cliente'})
    }
})


//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})