const Usuario = require("../entity/usuario.entity");
const { UsuarioJaExistenteError } = require("../error/usuario.error");
const bcrypt = require("bcrypt");

module.exports = {
    async createUsuario(userData) {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(userData.senha, saltRounds);
            userData.senha = hashedPassword;
    
            const newUser = await Usuario.create(userData);
            return newUser;
        } catch (error) {
           if (error.name === 'SequelizeUniqueConstraintError') {
            const duplicatedField = error.parent.detail.match(/\((.*?)\)/)[1];
            throw new UsuarioJaExistenteError(duplicatedField);
           }
           throw error;
        }
    },

    async getUsuarioByEmail(email) {
        try{
            const usuario = await Usuario.findOne({ where: { email } })
            return usuario;
        } catch (error) {
            throw error;
        }
    },

    async getUsuarioById(id) {
        try{
            const usuario = await Usuario.findByPk(id, {
                attributes: { exclude: ['senha'] } 
            });
            return usuario;
        } catch (error) {
            throw error;
        }
    },

    async updateUsuario(id, usuarioData) {
        try {
            await Usuario.update(usuarioData, { where: { id }});
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                const duplicatedField = error.parent.detail.match(/\((.*?)\)/)[1];
                throw new UsuarioJaExistenteError(duplicatedField);
               }
            throw error;
        }
    },

    async deleteUsuario(id) {
        try {
            await Usuario.destroy({ where: { id }});
        } catch (error) {
            throw error;
        }
    }
}
