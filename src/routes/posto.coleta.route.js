const express = require('express');
const router = express.Router();
const PostoColetaController = require("../controllers/posto.coleta.controller.js");
const { auth } = require("../middleware/autenticacao.middleware.js");
const { verficaPermissaoDeDoador } = require("../middleware/autorizacao.doador.middleware.js");
const { validaPostoColeta } = require("../dto/posto.coleta.dto.js");

router
    .post('/postoColeta', auth, verficaPermissaoDeDoador, validaPostoColeta, PostoColetaController.createPostoColeta)

    .get('/postoColeta/doador', auth, PostoColetaController.getPostosColeta)

    .get('/postoColeta/:id', auth, PostoColetaController.getPostoColeta)

    .put('/postoColeta/:id', auth, verficaPermissaoDeDoador, validaPostoColeta, PostoColetaController.updatePostoColeta)

    .delete('/postoColeta/:id', auth, verficaPermissaoDeDoador, PostoColetaController.deletePostoColeta)


module.exports = router;