const listarClientesService = require('../services/clienteService')

async function listarClientesController(req, res) {
    try {
        const dados = await listarClientesService()
        res.status(200).json({dados})
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar clientes', error })
    }
}

module.exports = listarClientesController