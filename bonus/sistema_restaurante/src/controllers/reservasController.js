const reservasService = require('../services/reservasService')

async function criarReserva(req, res) {
    const {cliente_id, mesa_id, data_reserva, hora_reserva} = req.body
    try {
        await reservasService.criarReserva(cliente_id, mesa_id, data_reserva, hora_reserva)
        res.status(201).json({message: 'Reserva criada com sucesso'})
    } catch (error) {
        console.log('Erro ao criar reserva')
        res.status(500).json({message: 'Erro ao criar reserva'})
    }
}

async function listarReservas(req, res) {
    try {
        const reservas = await reservasService.listarReservas()
        res.status(200).json(reservas)
    } catch (error) {
        console.log('Erro ao listar reserva')
        res.status(500).json({message: 'Erro ao listar reservas'})
    }
}

async function getReserva(req, res) {
    const { id } = req.params;

    try {
        const reserva = await reservasService.getReserva(id);
        res.status(200).json(reserva);
    } catch (erro) {
        console.log('Erro ao buscar reserva', erro);
        res.status(500).json({ mensagem: 'Erro ao buscar reserva' });
    }
}

async function atualizarReserva(req, res) {
    const { id } = req.params;
    const { cliente_id, mesa_id, data_reserva, hora_reserva, status } = req.body;

    try {
        await reservasService.atualizarReserva({ id, cliente_id, mesa_id, data_reserva, hora_reserva, status });
        res.status(200).json({ mensagem: 'Reserva atualizada com sucesso.' });
    } catch (erro) {
        console.log('Erro ao atualizar reserva', erro);
        res.status(500).json({ mensagem: 'Erro ao atualizar reserva' });
    }
}

module.exports = {criarReserva, listarReservas, getReserva, atualizarReserva}