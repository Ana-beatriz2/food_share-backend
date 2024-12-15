const reservaRepository = require("../repository/reserva.repository.js");
const reservaProdutoRepository = require("../repository/reserva.produto.repository.js");
const { ReservaNaoEncontradaError, PropriedadeReservaError } = require("../error/funcionamento.error.js");
const postoColetaProdutoRepository = require("../repository/posto.coleta.produto.repository.js");

module.exports = {
    async createReserva(reservaData, usuarioId) {
        try {
            const { observacao, dataRetirada, postoColetaId, produtoId, quantidade } = reservaData;

            const newReserva = await reservaRepository.createReserva({ usuarioId, observacao, dataRetirada, postoColetaId });

            const reservaId = newReserva.id;
            await reservaProdutoRepository.createReservaProduto({ reservaId, produtoId, quantidade });

            const postagem = await postoColetaProdutoRepository.getPostagemByProdutoPostoColeta(postoColetaId, produtoId);
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
                throw new ReservaNaoEncontradaError();
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

    async updateReserva(id, usuarioId, reservaData) {
        try {
            const reserva = await reservaRepository.getReservaById(id);

            if (!reserva) {
                throw new ReservaNaoEncontradaError();
            }

            if (reserva.usuarioId !== usuarioId) {
                throw new PropriedadePostagemError();
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
                throw new ReservaNaoEncontradaError();
            }

            if (reserva.usuarioId !== usuarioId) {
                throw new PropriedadeReservaError();
            }

            await reservaRepository.deleteReserva(id);
        } catch (error) {
            throw error;
        }
    }
};
