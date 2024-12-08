const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const UsuarioRoutes = require('./usuario.route.js');
const LoginRoutes = require('./login.route.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(cors());

router.use(UsuarioRoutes); 
router.use(LoginRoutes); 

module.exports = router;
