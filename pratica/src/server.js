const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const path = require('path')

const conexao = require('./db')

const app = express()

app.use(bodyParse.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})


app.post('/clientes', async (req, res) => {
    const {nome, telefone, email, senha, data_cadastro} = req.body

    const query = 'INSERT INTO clientes(nome, telefone, email, senha, data_cadastro) VALUES (?, ?, ?, ?, ?)'

    try{
        await conexao.query(query, [nome, telefone, email, senha, data_cadastro])
        res.status(201).json({message: 'Cliente cadastrado com sucesso'})
    } catch (erro){
        res.status(500).json({message: 'Erro ao cadastrar cliente', erro: erro.message})
    }
    
})

app.get('/clientes', async (req, res) => {
    const query = "SELECT nome, email, telefone FROM clientes"

    try {
        const [resultados] = await conexao.query(query)
        res.status(200).json(resultados)
    } catch (erro) {
        console.error('Erro ao localizar clientes:', erro);
        res.status(500).json({message: 'Erro ao localizar clientes'})

    }

})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})