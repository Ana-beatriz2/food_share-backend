const postoColetaProdutoRepository = require("../repository/posto.coleta.postagem.repository");
const { PostagemNaoEncontradaError, PropriedadePostagemError } = require("../error/posto.coleta.produto.error");

module.exports = {
    async createPostagem(postagemData) {
        try {
            const novaPostagem = await postoColetaProdutoRepository.createPostagem(postagemData);

            return novaPostagem;
        } catch (error) {
            throw error;
        }
    },

    async getPostagens() {
        try{
            const postagens = await postoColetaProdutoRepository.getPostagens();

            return postagens;
        } catch (error) {
            throw error;
        }
    },

    async getPostagensByDoador(doadorId) {
        try{
            const postagens = await postoColetaProdutoRepository.getPostagensByDoador(doadorId);
            
            return postagens;
        } catch (error) {
            throw error;
        }
    },

    async getPostagemById(id) {
        try{
            const postagem = await postoColetaProdutoRepository.getPostagemById(id);
            
            if (!postagem) {
                throw new PostagemNaoEncontradaError();
            }
            
            return postagem;
        } catch (error) {
            throw error;
        }
    },

    async updatePostagem(id, usuarioId, postagemData) {
        try {
            const postagem = await postoColetaProdutoRepository.getPostagemById(id);

            if (!postagem) {
                throw new PostagemNaoEncontradaError();
            }

            if (postagem.usuarioId !== usuarioId) {
                throw new PropriedadePostagemError();
            }

            await postoColetaProdutoRepository.updatePostagem(id, postagemData);
        } catch (error) {
            throw error;
        }
    },

    async deletePostagem(id, usuarioId) {
        try {
            const postagem = await postoColetaProdutoRepository.getPostagemById(id);

            if (!postagem) {
                throw new PostagemNaoEncontradaError();
            }

            if (postagem.usuarioId !== usuarioId) {
                throw new PropriedadePostagemError();
            }

            await postoColetaProdutoRepository.deletePostagem(id);
        } catch (error) {
            throw error;
        }
    },
}


