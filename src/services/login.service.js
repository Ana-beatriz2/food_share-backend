const usuarioRopository = require('../repository/usuario.repository');
const { UsuarioNaoEncontradoError, SenhaInvalidaError } = require('../error/usuario.error');
const { generateToken } = require('../utils/jwt.utils');
const { compareSync } = require("bcryptjs");


module.exports = {
    async login(email, senha) {
        try{ 
            const usuarioExists = await usuarioRopository.getUsuarioByEmail(email);

            if (!usuarioExists) {
                throw new UsuarioNaoEncontradoError();
            }

            if (!compareSync(senha, usuarioExists.senha)){
                throw new SenhaInvalidaError();
            }

            const token = generateToken(usuarioExists);

            return token;
        } catch (error) {
            throw error;
        }
    }
}