const usuarioRepository = require("../repository/usuario.repository.js")


module.exports = {
    async createUsuario(userData) {
        try {
            const newUser = await usuarioRepository.createUsuario(userData);
    
            return newUser;
        } catch (error) {
            throw error;
        }
    }
}