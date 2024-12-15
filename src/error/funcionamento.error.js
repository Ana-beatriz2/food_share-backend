class FuncionamentoNaoEncontradoError extends Error {
    constructor(message = "Infomração de funcionamento não encontrada") {
        super(message); 
        this.errorMessage = message
        this.status = 404;
    }
}

module.exports = { FuncionamentoNaoEncontradoError }