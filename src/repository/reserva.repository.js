const PostoColeta = require("../entity/posto.coleta.entity");
const Produto = require("../entity/produto.entity");
const Reserva = require("../entity/reserva.entity");
const ReservaProduto = require("../entity/reserva.produto.entity");


module.exports = {
    async createReserva(reservaData) {
        try {
            const newReserva = await Reserva.create(reservaData);

            return newReserva;
        } catch (error) {
            throw error;
        }
    },

    async getReservaById(id) {
        try {
            const reserva = await Reserva.findByPk(id,
                {
                    include: [
                        {
                            model: ReservaProduto,
                            attributes: ['quantidade'],
                            include: [
                                {
                                    model: Produto
                                }
                            ]
                        }
                    ]
                }
            );

            return reserva;
        } catch (error) {
            throw error;
        }
    },

    async getReservasNaoEntreguesReceptor(usuarioId) {
        try {
            const reservas = await Reserva.findAll({ 
                where: { usuarioId, entregue: false },
                include: [
                    {
                        model: ReservaProduto,
                        attributes: ['quantidade'],
                        include: [
                            {
                                model: Produto
                            }
                        ]
                    }
                ]
            });
            
            return reservas;
        } catch (error) {
            throw error;
        }
    },

    async getReservasByReceptor(usuarioId) {
        try {
            const reservas = await Reserva.findAll({ 
                where: { usuarioId },
                include: [
                    {
                        model: ReservaProduto,
                        attributes: ['quantidade'],
                        include: [
                            {
                                model: Produto
                            }
                        ]
                    },
                    {
                        model: PostoColeta
                    },
                ],
                raw: true,
                nest: true
            });
            
            return reservas;
        } catch (error) {
            throw error;
        }
    },

    async updateReserva(id, reservaData) {
        try {
            await Reserva.update(reservaData, { where: { id } });
        } catch (error) {
            throw error;
        }
    },

    async deleteReserva(id) {
        try {
            await Reserva.destroy({ where: { id } });
        } catch (error) {
            throw error;
        }
    }
};
