const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller.js');
const { validaUsuario } = require("../dto/usuario.dto.js");

router
    .post('/usuario', validaUsuario, UsuarioController.createUsuario);

module.exports = router;