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


app.post('/clientes', (req, res) => {
    const {nome, telefone, email, senha, data_cadastro} = req.body

    const query = 'INSERT INTO clientes(nome, telefone, email, senha, data_cadastro) VALUES (?, ?, ?, ?, ?)'
    conexao.query(query, [nome, telefone, email, senha, data_cadastro], (erro, resultado) => {
        if(erro){
            res.status(500).json({message: 'Erro ao cadastrar cliente', erro: erro.message})
        } else{
        res.status(201).json({message: 'Cliente cadastrado com sucesso'})
        }
    })
})

app.get('/clientes', (req, res) => {
    const query = "SELECT nome, email, telefone FROM clientes"

    conexao.query(query, (erro, resultados) =>{
        
        if(erro){
            res.status(500).json({message: 'Erro ao localizar clientes', erro: erro.message})
        } else{
            res.status(200).json(resultados)
        }
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})