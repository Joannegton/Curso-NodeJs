const express = require('express') // cria o servidor 
const bodyParser = require('body-parser') // analisa o corpo da requisição
const cors = require('cors') // permite que o servidor aceite requisições de outros domínios

const conexao = require('./db')

const app = express() // cria o servidor

app.use(bodyParser.json())
app.use(cors())

// rota basica para ver o funcionamento
app.get('/', (req, res) => {
    res.send('API está funcionando')
})

app.get('/api/clientes/list', (req, res) =>{
    conexao.query('SELECT * FROM clientes', (err, rows) => {
        if(err){
            console.error('Erro ao realizar a consulta')
            res.status(500).send('Erro ao realizar a consulta')
        } else{
            res.status(200).json(rows)
        }
    })
})

//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})