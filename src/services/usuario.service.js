const usuarioRepository = require("../repository/usuario.repository.js");
const { UsuarioNaoEncontradoError, UsuarioSemCpjOuCnpjError } = require("../error/usuario.error.js");
const bcrypt = require("bcrypt");

module.exports = {
    async createUsuario(userData) {
        try {

            if (!userData.cpnj && !userData.cpf) {
                throw new UsuarioSemCpjOuCnpjError();
            }

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

            if (usuarioData.senha) {
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(usuarioData.senha, saltRounds);
                usuarioData.senha = hashedPassword;
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