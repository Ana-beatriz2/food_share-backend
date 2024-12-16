const reservaRepository = require("../repository/reserva.repository.js");
const reservaProdutoRepository = require("../repository/reserva.produto.repository.js");
const { ReservaNaoEcontradaError, PropriedadeReservaError, QuantidadeAlimentoAlteradaError, QuantidadeAlimentoInsuficienteError } = require("../error/reserva.error.js");
const postoColetaProdutoRepository = require("../repository/posto.coleta.produto.repository.js");

module.exports = {
    async createReserva(reservaData, usuarioId) {
        try {
            const { observacao, dataRetirada, postoColetaId, produtoId, quantidade } = reservaData;

            const newReserva = await reservaRepository.createReserva({ usuarioId, observacao, dataRetirada, postoColetaId });

            const postagem = await postoColetaProdutoRepository.getPostagemByProdutoPostoColeta(postoColetaId, produtoId);
            
            if (postagem.quantidade < quantidade) {
                throw new QuantidadeAlimentoInsuficienteError();
            }

            const reservaId = newReserva.id;
            await reservaProdutoRepository.createReservaProduto({ reservaId, produtoId, quantidade });

            postagem.quantidade -= quantidade;

            await postoColetaProdutoRepository.updatePostagem(postagem.id, postagem.dataValues);

            return newReserva;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getReservaById(id) {
        try {
            const reserva = await reservaRepository.getReservaById(id);

            if (!reserva) {
                throw new ReservaNaoEcontradaError();
            }

            return reserva;
        } catch (error) {
            throw error;
        }
    },

    async getReservasByReceptor(usuarioId) {
        try {
            const reservas = await reservaRepository.getReservasByReceptor(usuarioId);

            return reservas;
        } catch (error) {
            throw error;
        }
    },

    async getReservasNaoEntreguesReceptor(usuarioId) {
        try {
            const reservas = await reservaRepository.getReservasNaoEntreguesReceptor(usuarioId);

            return reservas;
        } catch (error) {
            throw error;
        }
    },

    async updateReserva(id, usuarioId, reservaData) {
        try {
            const reserva = await reservaRepository.getReservaById(id);

            if (!reserva) {
                throw new ReservaNaoEcontradaError();
            }

            if (reserva.usuarioId !== usuarioId) {
                throw new PropriedadeReservaError();
            }

            const quantidadeReserva = reserva.ReservaProdutos[0].quantidade;

            if (quantidadeReserva !== reservaData.quantidade) {
                 throw new QuantidadeAlimentoAlteradaError();
            }

            await reservaRepository.updateReserva(id, reservaData);
        } catch (error) {
            throw error;
        }
    },

    async deleteReserva(id, usuarioId) {
        try {
            const reserva = await reservaRepository.getReservaById(id);

            if (!reserva) {
                throw new ReservaNaoEcontradaError();
            }

            if (reserva.usuarioId !== usuarioId) {
                throw new PropriedadeReservaError();
            }

            await reservaRepository.deleteReserva(id);

            const produtoId = reserva.ReservaProdutos[0].Produto.id;
            const quantidadeReserva = reserva.ReservaProdutos[0].quantidade;

            const postagem = await postoColetaProdutoRepository.getPostagemByProdutoPostoColeta(reserva.postoColetaId, produtoId);
            postagem.quantidade += quantidadeReserva;

            await postoColetaProdutoRepository.updatePostagem(postagem.id, postagem.dataValues);
        } catch (error) {
            throw error;
        }
    }
};
