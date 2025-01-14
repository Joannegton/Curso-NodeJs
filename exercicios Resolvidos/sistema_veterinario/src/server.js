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
        console.log(usuarios)
    } catch (error) {
        console.error("Erro ao buscar usuarios", error)
    }
})


//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})