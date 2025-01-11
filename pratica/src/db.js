const mysql = require('mysql2/promise')

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurante'
})

async function testarConexao() {
    try {
        await conexao.query('SELECT 1');
        console.log('Conexão com o banco de dados realizada com sucesso!');
    } catch (erro) {
        console.error('Erro ao se conectar ao banco de dados: ' + erro);
    }
}

testarConexao();

module.exports = conexao