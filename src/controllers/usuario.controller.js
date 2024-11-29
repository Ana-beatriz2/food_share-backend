const usuarioService = require("../services/usuario.service.js");

module.exports = {
    async createUsuario(req, res) {
        try {
            const userData = req.body;
    
            const newUser = await usuarioService.createUsuario(userData);
    
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(error.status || 400).json({ "message": error.message || "Houve um erro ao criar o usuário" });
        }
    }
}