const bodyParser = require('body-parser');
const cors = require('cors');
const UsuarioRoutes = require("./usuario.route.js");

module.exports = (app) => {
    app
      .use(bodyParser.json())
      .use(cors())
      .use('/api', UsuarioRoutes)
};