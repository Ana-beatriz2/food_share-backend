const usuarioRepository = require("../repository/usuario.repository.js");
const { UsuarioNaoEncontradoError } = require("../error/usuario.error.js");


module.exports = {
    async createUsuario(userData) {
        try {
            const newUser = await usuarioRepository.createUsuario(userData);

            return newUser;
        } catch (error) {
            throw error;
        }
    },

    async getUsuarioById(id) {
        try{
            const usuario = await usuarioRepository.getUsuarioById(id);

            return usuario;
        } catch (error) {
            throw error;
        }
    },

    async updateUsuario(id, usuarioData) {
        try {
            const usuario = await usuarioRepository.getUsuarioById(id);

            if (!usuario) {
                throw new UsuarioNaoEncontradoError();
            }

            await usuarioRepository.updateUsuario(id, usuarioData);
        } catch (error) {
            throw error;
        }
    },

    async deleteUsuario(id) {
        try {
            const usuario = await usuarioRepository.getUsuarioById(id);

            if (!usuario) {
                throw new UsuarioNaoEncontradoError();
            }

            await usuarioRepository.deleteUsuario(id);
        } catch (error) {
            throw error;
        }
    }
}