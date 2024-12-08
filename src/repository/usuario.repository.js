const Usuario = require("../entity/usuario.entity");
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
    }
}
