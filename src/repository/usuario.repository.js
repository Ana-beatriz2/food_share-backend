const Usuario = require("../entity/usuario.entity");

module.exports = {
    async createUsuario(userData) {
        try {
            const newUser = await await Usuario.create(userData);
    
            return newUser;
        } catch (error) {
           throw error;
        }
    }
}