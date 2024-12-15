const Produto = require("../entity/produto.entity");

module.exports = {
    async createProduto(produtoData) {
        try {
            const novoProduto = await Produto.create(produtoData);
            
            return novoProduto;
        } catch (error) {
            throw error;
        }
    },

    async getProdutos() {
        try {
            const produtos = await Produto.findAll();

            return produtos;
        } catch (error) {
            throw error;
        }
    },

    async getProdutoById(id) {
        try {
            const produto = await Produto.findByPk(id);

            return produto;
        } catch (error) {
            throw error;
        }
    }
};
