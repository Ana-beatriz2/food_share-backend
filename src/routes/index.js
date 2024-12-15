const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const UsuarioRoutes = require('./usuario.route.js');
const LoginRoutes = require('./login.route.js');
const PostagemRoutes = require('./posto.coleta.produto.route.js');
const PostoColetaRoutes = require('./posto.coleta.route.js');
const ProdutoRoutes = require('./produto.route.js');
const FuncionamentoRoutes = require('./funcionamento.route.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(cors());

router.use(UsuarioRoutes); 
router.use(LoginRoutes); 
router.use(PostagemRoutes); 
router.use(PostoColetaRoutes); 
router.use(ProdutoRoutes); 
router.use(FuncionamentoRoutes); 

module.exports = router;
