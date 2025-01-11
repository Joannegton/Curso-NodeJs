const express = require('express')
const reservaController = require('../controllers/reservasController')
const reservaRouter = express.Router()

reservaRouter.post('/reserva', reservaController.criarReserva)

reservaRouter.get('/', reservaController.listarReservas)

reservaRouter.get('/reserva/:id', reservaController.getReserva)

reservaRouter.put('/reserva/:id', reservaController.atualizarReserva)

module.exports = reservaRouter