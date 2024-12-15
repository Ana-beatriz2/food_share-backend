const usuarioRepository = require("../repository/usuario.repository.js");
const { UsuarioSemPermissaoReceptor } = require("../error/usuario.error.js");

async function verficaPermissaoDeReceptor(req, res, next) {
    try {
        const usuarioId = req.userData.id;

        const { tipoUsuario } = await usuarioRepository.getUsuarioById(usuarioId);

        if (tipoUsuario !== 'receptor') {
            throw new UsuarioSemPermissaoReceptor();
        }

        next();
    } catch (error) {
        return res.status(error.status || 403).json({ "message": error.errorMessage || "Erro de autorização" });
    }
}

module.exports = { verficaPermissaoDeReceptor };