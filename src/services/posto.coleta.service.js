const postoColetaRepository = require("../repository/posto.coleta.repository");
const { PostoColetaNaoEncontradoError, PropriedadePostoColetaError } = require("../error/posto.coleta.error");

module.exports = {
    async createPostoColeta(postoColetaData) {
        try {
            const novoPostoColeta = await postoColetaRepository.createPostoColeta(postoColetaData);

            return novoPostoColeta;
        } catch (error) {
            throw error;
        }
    },

    async getPostosColetaByDoador(doadorId) {
        try {
            const postosColeta = await postoColetaRepository.getPostosColetaByDoador(doadorId);

            return postosColeta;
        } catch (error) {
            throw error;
        }
    },

    async getPostoColetaById(id) {
        try {
            const postoColeta = await postoColetaRepository.getPostoColetaById(id);

            if (!postoColeta) {
                throw new PostoColetaNaoEncontradoError();
            }

            return postoColeta;
        } catch (error) {
            throw error;
        }
    },

    async updatePostoColeta(id, usuarioId, postoColetaData) {
        try {
            const postoColeta = await postoColetaRepository.getPostoColetaById(id);

            if (!postoColeta) {
                throw new PostoColetaNaoEncontradoError();
            }

            if (postoColeta.usuarioId !== usuarioId) {
                throw new PropriedadePostoColetaError();
            }

            await postoColetaRepository.updatePostoColeta(id, postoColetaData);
        } catch (error) {
            throw error;
        }
    },

    async deletePostoColeta(id, usuarioId) {
        try {
            const postoColeta = await postoColetaRepository.getPostoColetaById(id);

            if (!postoColeta) {
                throw new PostoColetaNaoEncontradoError();
            }

            if (postoColeta.usuarioId !== usuarioId) {
                throw new PropriedadePostoColetaError();
            }

            await postoColetaRepository.deletePostoColeta(id);
        } catch (error) {
            throw error;
        }
    },
}


