const conexao = require('../db')


async function criarReserva(cliente_id, mesa_id, data_reserva, hora_reserva) {
    const query = 'INSERT INTO reservas(cliente_id, mesa_id, data_reserva, hora_reserva) VALUES(?, ?, ?, ?)'

    try {
        const [resultado] = await conexao.query(query, [cliente_id, mesa_id, data_reserva, hora_reserva])
        return resultado.insertId
    } catch (error) {
        console.log('Erro ao criar reserva', error)
        throw error
    }
}


async function listarReservas() {
    const query = 'SELECT * FROM reservas'

    try {
        const [reservas] = await conexao.query(query)
        return reservas
    } catch (error) {
        console.log('Erro ao listar reservas')
        throw error
    }
}

async function getReserva() {
    const query = 'SELECT * FROM reservas WHERE id = ?'

    try {
        const [reserva] = await conexao.query(query, [id])
        return reserva
    } catch (error) {
        console.log('Erro ao buscar reserva')
        throw error
    }
}

async function atualizarReserva(params) {
    const {id, ...campos} = params // separa o id do resto dos campos
    const chaves = Object.keys(campos) // pega as chaves do objeto
    const valores = Object.values(campos) // pega os valores do objeto

    const clausulaSet = chaves.map(chave => `${chave} = ?`).join(', ') // monta a cláusula SET - mesa_id = ?, reserva_id = ?, data_reserva = ?
    const query = `UPDATE reservas SET ${clausulaSet} WHERE id = ?` // UPDATE reservas SET mesa_id = ?, reserva_id = ?, data_reserva = ? WHERE id = ?

    try {
        await conexao.query(query, [...valores, id])
        return true
    } catch (error) {
        console.log('Erro ao atualizar reserva', error)
        throw error
    }
}

module.exports = {criarReserva, listarReservas, getReserva, atualizarReserva}