const conexao = require("../db")

async function listarMesas() {
    const query = 'SELECT * FROM mesas'
    try {
        const [mesas] = await conexao.query(query)
        return mesas
    } catch (error) {
        console.log('Erro ao buscar mesas', error)
        throw error;
    }
}

async function atualizarStatusMesa(numero, status) {
    const query = 'UPDATE mesas SET status = ? WHERE numero = ?';

    try {
        await conexao.query(query, [status, numero]);
    } catch (error) {
        console.log('Erro ao atualizar mesas', error);
        throw error;
    }
}



module.exports = {listarMesas, atualizarStatusMesa}