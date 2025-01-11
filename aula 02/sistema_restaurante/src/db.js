const mysql = require('mysql2/promise')

// cria a conexão com o banco
const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema_reservas'
})

//verifica a conexão
async function testarConexao() {
    try {
        await conexao.query('SELECT 1');
        console.log('Conexão com o banco de dados realizada com sucesso!');
    } catch (erro) {
        console.error('Erro ao se conectar ao banco de dados: ' + erro);
    }
}

testarConexao();

//exportamos a conexão
module.exports = conexao