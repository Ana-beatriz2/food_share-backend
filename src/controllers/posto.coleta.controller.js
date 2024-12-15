const postoColetaService = require("../services/posto.coleta.service");

module.exports = {
    async createPostoColeta(req, res) {
        try {
            let postoColetaData = req.body;
            postoColetaData.usuarioId = req.userData.id;
  
            const novoPostoColeta = await postoColetaService.createPostoColeta(postoColetaData);
    
            return res.status(201).json(novoPostoColeta);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao criar o posto de coleta" });
        }
    },

    async getPostosColeta(req, res) {
        try {   
            const doadorId = req.userData.id;
            const postosColeta = await postoColetaService.getPostosColetaByDoador(doadorId);

            return res.status(200).json(postosColeta);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao retornar os postos de coleta" });
        }
    },

    async getPostoColeta(req, res) {
        try {   
            const { id } = req.params;

            const postosColeta = await postoColetaService.getPostoColetaById(id);

            return res.status(200).json(postosColeta);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao retornar o posto de coleta" });
        }
    },

    async updatePostoColeta(req, res) {
        try {
            const { id } = req.params;
            const postoColetaData = req.body;
            const usuarioId = req.userData.id;

            await postoColetaService.updatePostoColeta(id, usuarioId, postoColetaData);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao atualizar o posto de coleta" });
        }
    },

    async deletePostoColeta(req, res) {
        try {
            const { id } = req.params;
            const usuarioId = req.userData.id;

            await postoColetaService.deletePostoColeta(id, usuarioId);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao excluir o posto de coleta" });
        }
    }
}