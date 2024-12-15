const funcionamentoRepository = require("../repository/funcionamento.repository.js");
const { FuncionamentoNaoEncontradoError } = require("../error/funcionamento.error.js");


module.exports = {
    async createFuncionamento(funcionamentoData) {
        try {
            const newFuncionamento = await funcionamentoRepository.createFuncionamento(funcionamentoData);

            return newFuncionamento;
        } catch (error) {
            throw error;
        }
    },

    async getFuncionamentoById(id) {
        try {
            const funcionamento = await funcionamentoRepository.getFuncionamentoById(id);

            if (!funcionamento) {
                throw new FuncionamentoNaoEncontradoError();
            }

            return funcionamento;
        } catch (error) {
            throw error;
        }
    },

    async getFuncionamentoByPostoColetaId(postoColetaId) {
        try {
            const funcionamentos = await funcionamentoRepository.getFuncionamentoByPostoColetaId(postoColetaId);

            return funcionamentos;
        } catch (error) {
            throw error;
        }
    },

    async updateFuncionamento(id, funcionamentoData) {
        try {
            const funcionamento = await funcionamentoRepository.getFuncionamentoById(id);

            if (!funcionamento) {
                throw new FuncionamentoNaoEncontradoError();
            }

            await funcionamentoRepository.updateFuncionamento(id, funcionamentoData);
        } catch (error) {
            throw error;
        }
    },

    async deleteFuncionamento(id) {
        try {
            const funcionamento = await funcionamentoRepository.getFuncionamentoById(id);

            if (!funcionamento) {
                throw new FuncionamentoNaoEncontradoError();
            }

            await funcionamentoRepository.deleteFuncionamento(id);
        } catch (error) {
            throw error;
        }
    }
};
