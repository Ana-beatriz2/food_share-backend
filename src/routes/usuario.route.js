const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller.js');
const { validaUsuario } = require("../dto/usuario.dto.js");
const { auth } = require("../middleware/autenticacao.middleware.js");

router
    .post('/usuario', auth, validaUsuario, UsuarioController.createUsuario);

module.exports = router;