const { func } = require("joi");
const Funcionamento = require("../entity/funcionamento.entity");


module.exports = {
    async createFuncionamento(funcionamentoData) {
        try {
            const newFuncionamento = await Funcionamento.create(funcionamentoData);

            return newFuncionamento;
        } catch (error) {
            throw error;
        }
    },

    async getFuncionamentos(id) {
        try {
            const funcionamento = await Funcionamento.findAll(id);

            return funcionamento;
        } catch (error) {
            throw error;
        }
    },


    async getFuncionamentoByPostoColetaId(postoColetaId) {
        try {
            const funcionamento = await Funcionamento.findAll({ where: { postoColetaId } });

            return funcionamento;
        } catch (error) {
            throw error;
        }
    },

    async getFuncionamentoById(id) {
        try {
            const funcionamento = await Funcionamento.findByPk(id);
            
            return funcionamento;
        } catch (error) {
            throw error;
        }
    },

    async updateFuncionamento(id, funcionamentoData) {
        try {
            await Funcionamento.update(funcionamentoData, { where: { id } });
        } catch (error) {
            throw error;
        }
    },

    async deleteFuncionamento(id) {
        try {
            await Funcionamento.destroy({ where: { id } });
        } catch (error) {
            throw error;
        }
    }
};
