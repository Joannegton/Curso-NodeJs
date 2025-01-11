const express = require('express')
const { listarMesas, atualizarStatusMesa } = require('../controllers/mesasController')

const mesasRouter = express.Router()

mesasRouter.get('/mesas', listarMesas)

mesasRouter.put('/mesas/:numero', atualizarStatusMesa)

module.exports = mesasRouter