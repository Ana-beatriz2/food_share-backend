const produtoService = require("../services/produto.service");

module.exports = {
    async createProduto(req, res) {
        try {
            let produtoData = req.body;

            const novoProduto = await produtoService.createProduto(produtoData);

            return res.status(201).json(novoProduto);
        } catch (error) {
            console.error(error);
            return res.status(error.status || 500).json({ message: error.errorMessage || "Houve um erro ao criar o produto" });
        }
    },

    async getProdutos(_, res) {
        try {
            const produtos = await produtoService.getProdutos();

            return res.status(200).json(produtos);
        } catch (error) {
            console.error(error);
            return res.status(error.status || 500).json({ message: error.errorMessage || "Houve um erro ao retornar os produtos" });
        }
    },

    async getProduto(req, res) {
        try {
            const { id } = req.params;

            const produto = await produtoService.getProdutoById(id);

            return res.status(200).json(produto);
        } catch (error) {
            console.error(error);
            return res.status(error.status || 500).json({ message: error.errorMessage || "Houve um erro ao retornar o produto" });
        }
    }
};
