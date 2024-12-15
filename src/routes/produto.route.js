const express = require('express');
const router = express.Router();
const produtoController = require("../controllers/produto.controller.js");
const { auth } = require("../middleware/autenticacao.middleware.js");
const { verficaPermissaoDeDoador } = require("../middleware/autorizacao.doador.middleware.js");
const { validaProduto } = require("../dto/produto.dto.js");

router
    .post('/produto', auth, verficaPermissaoDeDoador, validaProduto, produtoController.createProduto)

    .get('/produto', auth, produtoController.getProdutos)

    .get('/produto/:id', auth, produtoController.getProduto)


module.exports = router;