const postoColetaProdutoService = require("../services/posto.coleta.produto.service");

module.exports = {
    async createPostagem(req, res) {
        try {
            let postagemData = req.body;
            const usuarioId = req.userData.id;
  
            const novaPostagem = await postoColetaProdutoService.createPostagem(postagemData, usuarioId);
    
            return res.status(201).json(novaPostagem);
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao criar a postagem" });
        }
    },

    async getPostagens(_, res) {
        try {   
            const postagens = await postoColetaProdutoService.getPostagens();

            return res.status(200).json(postagens);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao retornar as postagens" });
        }
    },

    async getPostagensByDoador(req, res) {
        try {   
            const doadorId = req.userData.id;
            
            const postagens = await postoColetaProdutoService.getPostagensByDoador(doadorId);

            return res.status(200).json(postagens);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao retornar as postagens" });
        }
    },

    async getPostagem(req, res) {
        try {   
            const { id } = req.params;

            const postagem = await postoColetaProdutoService.getPostagemById(id);

            if (!postagem) {
                
            }

            return res.status(200).json(postagem);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao retornar a postagem" });
        }
    },

    async updatePostagem(req, res) {
        try {
            const { id } = req.params;
            const postagemData = req.body;
            const usuarioId = req.userData.id;

            await postoColetaProdutoService.updatePostagem(id, usuarioId, postagemData);
            return res.status(204).send();
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao atualizar a postagem" });
        }
    },

    async deletePostagem(req, res) {
        try {
            const { id } = req.params;
            const usuarioId = req.userData.id;

            await postoColetaProdutoService.deletePostagem(id, usuarioId);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao excluir a postagem" });
        }
    }
}