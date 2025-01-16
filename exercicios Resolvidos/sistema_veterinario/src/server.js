const express = require('express') // criar o servidor 
const bodyParser = require('body-parser') // analisar o corpo da requisição
const cors = require('cors') // permitir que o servidor aceite requisições de outros domínios
const conexao = require('./db') // importa a conexão com o banco de dados

const app = express() // cria o servidor

app.use(bodyParser.json()) // analisa o corpo da requisição
app.use(cors()) // permite que o servidor aceite requisições de outros domínios

// rota para buscar usuarios
app.get('/usuarios', async (req, res) => {
    const query = 'SELECT * FROM usuarios'
    try {
        const [usuarios] = await conexao.query(query)
        res.json(usuarios)
    } catch (error) {
        console.error("Erro ao buscar usuarios", error)
        res.status(500).send("Erro ao buscar usuarios")
    }
})

// rota para cadastrar usuario
app.post('/usuarios', async (req, res) => {
    const { nome, email } = req.body
    const query = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)'
    try {
        await conexao.query(query, [nome, email])
        res.status(201).send("Usuario cadastrado com sucesso")
    } catch (error) {
        console.error("Erro ao cadastrar usuario", error)
        res.status(500).send("Erro ao cadastrar usuario")
    }
})

// rota para atualizar usuario
app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params
    const { nome, email } = req.body
    const query = 'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?'
    try {
        await conexao.query(query, [nome, email, id])
        res.send("Usuario atualizado com sucesso")
    } catch (error) {
        console.error("Erro ao atualizar usuario", error)
        res.status(500).send("Erro ao atualizar usuario")
    }
})

// rota para deletar usuario
app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params
    const query = 'DELETE FROM usuarios WHERE id = ?'
    try {
        await conexao.query(query, [id])
        res.send("Usuario deletado com sucesso")
    } catch (error) {
        console.error("Erro ao deletar usuario", error)
        res.status(500).send("Erro ao deletar usuario")
    }
})

//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})