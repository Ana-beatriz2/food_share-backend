const PostoColeta = require("../entity/posto.coleta.entity");

module.exports = {
    async createPostoColeta(postoColetaData) {
        try {
            const novoPostoColeta = await PostoColeta.create(postoColetaData);

            return novoPostoColeta;
        } catch (error) {
            throw error;
        }
    },

    async getPostosColetaByDoador(doadorId) {
        try {
            const postosColeta = await PostoColeta.findAll({
                where: { usuarioId: doadorId }
            });
            return postosColeta;
        } catch (error) {
            throw error;
        }
    },

    async getPostoColetaById(id) {
        try {
            const postoColeta = await PostoColeta.findByPk(id);
          
            return postoColeta;
        } catch (error) {
            throw error;
        }
    },

    async updatePostoColeta(id, postoColetaData) {
        try {
            await PostoColeta.update(postoColetaData, { where: { id } });
        } catch (error) {
            throw error;
        }
    },

    async deletePostoColeta(id) {
        try {
            await PostoColeta.destroy({ where: { id } });
        } catch (error) {
            throw error;
        }
    }
}
