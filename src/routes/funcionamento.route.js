const express = require('express');
const router = express.Router();
const FuncionamentoController = require('../controllers/funcionamento.controller.js');
const { auth } = require("../middleware/autenticacao.middleware.js");
const { verficaPermissaoDeDoador } = require("../middleware/autorizacao.doador.middleware.js");
const { validaFuncionamento } = require("../dto/funcionamento.dto.js");

router
    .post('/funcionamento', auth, verficaPermissaoDeDoador, validaFuncionamento, FuncionamentoController.createFuncionamento)

    .get('/funcionamento/:id', auth, FuncionamentoController.getFuncionamentById)

    .get('/funcionamento/postoColeta/:id', auth, FuncionamentoController.getFuncionamentoByPostoColetaId)

    .put('/funcionamento/:id', auth, verficaPermissaoDeDoador, validaFuncionamento, FuncionamentoController.updateFuncionamento)

    .delete('/funcionamento/:id', auth, verficaPermissaoDeDoador, FuncionamentoController.deleteFuncionamento)

module.exports = router;