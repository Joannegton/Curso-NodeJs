const express = require('express') // cria o servidor 
const bodyParser = require('body-parser') // analisa o corpo da requisição
const cors = require('cors') // permite que o servidor aceite requisições de outros domínios
const clientesRouter = require('./routes/clientesRoutes')


const app = express() // cria o servidor

app.use(bodyParser.json())
app.use(cors())


app.use('/api', clientesRouter)

//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})