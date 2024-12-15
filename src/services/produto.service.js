const produtoRepository = require("../repository/produto.repository");
const { ProdutoNaoEncontradoError } = require("../error/produto.error");

module.exports = {
    async createProduto(produtoData) {
        try {
            const novoProduto = await produtoRepository.createProduto(produtoData);

            return novoProduto;
        } catch (error) {
            throw error;
        }
    },

    async getProdutos() {
        try {
            const produtos = await produtoRepository.getProdutos();

            return produtos;
        } catch (error) {
            throw error;
        }
    },

    async getProdutoById(id) {
        try {
            const produto = await produtoRepository.getProdutoById(id);

            if (!produto) {
                throw new ProdutoNaoEncontradoError();
            }

            return produto;
        } catch (error) {
            throw error;
        }
    }
};
