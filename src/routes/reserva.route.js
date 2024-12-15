const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/reserva.controller.js');
const { auth } = require("../middleware/autenticacao.middleware.js");
const { verficaPermissaoDeReceptor } = require("../middleware/autorizacao.receptor.middleware.js");

router
    .post('/reserva', auth, verficaPermissaoDeReceptor, ReservaController.createReserva)
    
    .get('/reserva/receptor', auth, verficaPermissaoDeReceptor, ReservaController.getReservasByReceptor)

    .get('/reserva/:id', auth, ReservaController.getReserva)

    .put('/reserva/:id', auth, verficaPermissaoDeReceptor, ReservaController.updateReserva)

    .delete('/reserva/:id', auth, verficaPermissaoDeReceptor, ReservaController.deleteReserva)

module.exports = router;