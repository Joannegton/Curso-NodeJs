const mysql = require('mysql2')

// cria a conexão com o banco
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema_reservas'
})

//verifica a conexão
conexao.connect((err) => {
    if (err){
        console.error('Erro ao conectar com o banco de dados: ', err)
    } else{
        console.log('Conectado ao banco de dados!')
    }
})

//exportamos a conexão
module.exports = conexao