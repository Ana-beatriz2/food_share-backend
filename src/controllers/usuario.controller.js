const { update } = require("../entity/usuario.entity.js");
const usuarioService = require("../services/usuario.service.js");

module.exports = {
    async createUsuario(req, res) {
        try {
            const userData = req.body;
    
            const newUser = await usuarioService.createUsuario(userData);
    
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.message || "Houve um erro ao criar o usuário" });
        }
    },

    async getUsuario(req, res) {
        try {   
            const { id } = req.params;

            const usuario = await usuarioService.getUsuarioById(id);

            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.message || "Houve um erro ao retornar o usuário" });
        }
    },

    async updateUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuarioData = req.body;

            await usuarioService.updateUsuario(id, usuarioData);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.message || "Houve um erro ao atualizar o usuário" });
        }
    },

    async deleteUsuario(req, res) {
        try {
            const { id } = req.params;

            await usuarioService.deleteUsuario(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.message || "Houve um erro ao excluir o usuário" });
        }
    }
}