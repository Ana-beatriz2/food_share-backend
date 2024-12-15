const ReservaProduto = require("../entity/reserva.produto.entity");


module.exports = {
    async createReservaProduto(reservaProdutoData) {
        try {
            const newReserva = await ReservaProduto.create(reservaProdutoData);

            return newReserva;
        } catch (error) {
            throw error;
        }
    },

    async updateReservaProduto(id, reservaData) {
        try {
            await ReservaProduto.update(reservaData, { where: { id } });
        } catch (error) {
            throw error;
        }
    }
};
