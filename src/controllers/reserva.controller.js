const reservaService = require("../services/reserva.service.js");

module.exports = {
    async createReserva(req, res) {
        try {
            const reservaData = req.body;
            const usuarioId = req.userData.id;
    
            const newReserva = await reservaService.createReserva(reservaData, usuarioId);
    
            return res.status(201).json(newReserva);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao criar a reserva" });
        }
    },

    async getReserva(req, res) {
        try {   
            const { id } = req.params;

            const reserva = await reservaService.getReservaById(id);

            return res.status(200).json(reserva);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao retornar a reserva" });
        }
    },

    async getReservasByReceptor(req, res) {
        try {   
            const usuarioId = req.userData.id;

            const reserva = await reservaService.getReservasByReceptor(usuarioId);

            return res.status(200).json(reserva);
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao retornar as reservas" });
        }
    },

    async updateReserva(req, res) {
        try {
            const { id } = req.params;
            const reservaData = req.body;
            const usuarioId = req.userData.id;

            await reservaService.updateReserva(id, usuarioId, reservaData);
            return res.status(204).send();
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao atualizar a reserva" });
        }
    },

    async deleteReserva(req, res) {
        try {
            const { id } = req.params;
            const usuarioId = req.userData.id;

            await reservaService.deleteReserva(id, usuarioId);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao excluir a reserva" });
        }
    }
};
