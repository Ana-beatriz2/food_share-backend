const { post } = require('../routes/funcionamento.route');
const funcionamentoService = require('../services/funcionamento.service');

module.exports = {
    async createFuncionamento(req, res) {
        try {
            const funcionamentoData = req.body;

            const newFuncionamento = await funcionamentoService.createFuncionamento(funcionamentoData);

            return res.status(201).json(newFuncionamento);
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao criar o funcionamento" });
        }
    },


    async getFuncionamentoByPostoColetaId(req, res) {
        try {   
            const { id } = req.params;

            const funcionamento = await funcionamentoService.getFuncionamentoByPostoColetaId(id);

            return res.status(200).json(funcionamento);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao retornar o funcionamento" });
        }
    }, 

    async getFuncionamentById(req, res) {
        try {   
            const { id } = req.params;

            const funcionamento = await funcionamentoService.getFuncionamentoById(id);

            return res.status(200).json(funcionamento);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao retornar o funcionamento" });
        }
    },

    async updateFuncionamento(req, res) {
        try {
            const { id } = req.params;
            const funcionamentoData = req.body;

            await funcionamentoService.updateFuncionamento(id, funcionamentoData);
            return res.status(204).send();
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao atualizar o funcionamento" });
        }
    },

    async deleteFuncionamento(req, res) {
        try {
            const { id } = req.params;

            await funcionamentoService.deleteFuncionamento(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao excluir o funcionamento" });
        }
    }
}
