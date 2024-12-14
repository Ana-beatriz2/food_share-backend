const usuarioRepository = require("../repository/usuario.repository.js");
const { UsuarioSemPermissaoDoador } = require("../error/usuario.error.js");

async function verficaPermissaoDeDoador(req, res, next) {
    try {
        const usuarioId = req.userData.id;

        const { tipoUsuario } = await usuarioRepository.getUsuarioById(usuarioId);

        if (tipoUsuario !== 'doador') {
            throw new UsuarioSemPermissaoDoador();
        }

        next();
    } catch (error) {
        return res.status(error.status || 403).json({ "message": error.errorMessage || "Erro de autorização" });
    }
}

module.exports = { verficaPermissaoDeDoador };