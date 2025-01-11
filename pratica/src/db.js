const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurante'
})

conexao.connect((erro) => {
    if(erro){
        console.error('Erro ao se conectar ao banco de dados: ' + erro)
    } else {
        console.log('Conexão com o banco de dados realizada com sucesso!')
    }
})

module.exports = conexao