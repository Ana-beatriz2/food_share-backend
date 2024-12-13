const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller.js');
const { validaCreateUsuario, validaUpdateUsuario } = require("../dto/usuario.dto.js");
const { auth } = require("../middleware/autenticacao.middleware.js");

router
    .post('/usuario', auth, validaCreateUsuario, UsuarioController.createUsuario)

    .get('/usuario/:id', auth, UsuarioController.getUsuario)

    .patch('/usuario/:id', auth, validaUpdateUsuario, UsuarioController.updateUsuario)

    .delete('/usuario/:id', auth, UsuarioController.deleteUsuario)

module.exports = router;