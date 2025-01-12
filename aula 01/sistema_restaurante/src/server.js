const express = require('express') // cria o servidor 
const bodyParser = require('body-parser') // analisa o corpo da requisição
const cors = require('cors') // permite que o servidor aceite requisições de outros domínios

const app = express() // cria o servidor

app.use(bodyParser.json()) // analisa o corpo da requisição
app.use(cors()) // permite que o servidor aceite requisições de outros domínios

// rota basica para ver o funcionamento
app.get('/', (req, res) => {
    res.send('API está funcionando')
})


//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})