const express = require('express');
const router = express.Router();
const PostagemController = require("../controllers/posto.coleta.produto.controller.js");
const { auth } = require("../middleware/autenticacao.middleware.js");
const { verficaPermissaoDeDoador } = require("../middleware/autorizacao.doador.middleware.js");
const { validaPostagem } = require("../dto/posto.coleta.produto.dto.js");
const upload = require('../utils/multer.utils.js');

router
    .post('/postagem', auth, verficaPermissaoDeDoador, upload.single('file'), validaPostagem, PostagemController.createPostagem)

    .get('/postagem', auth, PostagemController.getPostagens)

    .get('/postagem/doador', auth, verficaPermissaoDeDoador, PostagemController.getPostagensByDoador)

    .get('/postagem/:id', auth, PostagemController.getPostagem)

    .put('/postagem/:id', auth, validaPostagem, PostagemController.updatePostagem)

    .delete('/postagem/:id', auth, PostagemController.deletePostagem)


module.exports = router;