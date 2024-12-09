const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller.js');
const { validaLogin } = require("../dto/login.dto.js");

router
    .post('/login', validaLogin, loginController.login);

module.exports = router;