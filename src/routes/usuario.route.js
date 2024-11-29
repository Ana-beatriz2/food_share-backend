const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller.js')

router
    .post('/usuario', UsuarioController.createUsuario);

module.exports = router;