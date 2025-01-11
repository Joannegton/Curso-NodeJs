const conexao = require("../db");

function listarClientesService(){
    return new Promise((resolve, reject) => {
        conexao.query('SELECT * FROM clientes', (err, rows) => {
            if (err) {
                console.error('Erro ao realizar consulta: ', err)
                reject(err)
            } else{
                resolve(rows)
            }
        })
    })
}

module.exports = listarClientesService