const express = require('express')
const listarClientesController = require('../controllers/clientesController')
const router = express.Router()

router.get('/clientes/list', listarClientesController)

module.exports = router