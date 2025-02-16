const PostoColetaProduto = require("../entity/posto.coleta.produto.entity");
const { Op } = require('sequelize');
const Produto = require("../entity/produto.entity");
const PostoColeta = require("../entity/posto.coleta.entity");
const Usuario = require("../entity/usuario.entity");
const Funcionamento = require("../entity/funcionamento.entity");

module.exports = {
    async createPostagem(postagemData) {
        try {
            const novaPostagem = await PostoColetaProduto.create(postagemData);
            return novaPostagem;
        } catch (error) {
           throw error;
        }
    },

    async getPostagens() {
        try{
            const postagens = await PostoColetaProduto.findAll({
                where: {
                  validade: {
                    [Op.gte]: new Date() 
                  },
                  quantidade: {
                    [Op.gt]: 0
                  }
                },
                include: [
                    {
                      model: Produto
                    },
                    {
                      model: PostoColeta
                    }
                  ],
                order: [['validade', 'ASC']] 
              });
            return postagens;
        } catch (error) {
            throw error;
        }
    },

    async getPostagensByDoador(doadorId) {
        try{
            const postagens = await PostoColetaProduto.findAll({
                where: { usuarioId: doadorId },
                include: [
                    {
                      model: Produto
                    },
                    {
                      model: PostoColeta
                    }
                  ],
            });
            return postagens;
        } catch (error) {
            throw error;
        }
    },

    async getPostagemById(id) {
        try{
            const postagem = await PostoColetaProduto.findByPk(id, {
                include: [
                    {
                      model: Produto
                    },
                    {
                      model: PostoColeta,
                      include: {
                        model: Funcionamento
                      }
                    },
                    {
                      model: Usuario,
                      attributes: { exclude: ['senha'] } 
                    }
                  ]
        });
            return postagem;
        } catch (error) {
            throw error;
        }
    },

    async getPostagemByProdutoPostoColeta(postoColetaId, produtoId) {
      try{
          const postagem = await PostoColetaProduto.findOne({
              where: { 
                postoColetaId,  
                produtoId,
                validade: {
                  [Op.gte]: new Date() 
                },
                quantidade: {
                  [Op.gt]: 0
                }
              }
      });
          return postagem;
      } catch (error) {
          throw error;
      }
  },

  async getPostagemByProdutoPostoColetaNoFilter(postoColetaId, produtoId) {
    try{
        const postagem = await PostoColetaProduto.findOne({
            where: { 
              postoColetaId,  
              produtoId
            }
      });

      if (!postagem) {
        return null; 
      }

      return postagem.get();
    } catch (error) {
        throw error;
    }
},

    async updatePostagem(id, postagemData) {
        try {
            await PostoColetaProduto.update(postagemData, { where: { id }});
        } catch (error) {
            throw error;
        }
    },

    async updateQuantidadePostagem(postoColetaId, ProdutoId, quantidade) {
      try {
          await PostoColetaProduto.update(postagemData, { where: { id }});
      } catch (error) {
          throw error;
      }
  },

    async deletePostagem(id) {
        try {
            await PostoColetaProduto.destroy({ where: { id }});
        } catch (error) {
            throw error;
        }
    }
}
