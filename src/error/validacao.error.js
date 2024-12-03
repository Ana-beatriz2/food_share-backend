class CampoObrigatorioFaltandoError extends Error {
    constructor(message = "Campo obrigatório está faltando") {
        super(message); 
        this.errorMessage = message
        this.status = 400;
    }
}

class InformacaoInvalidaError extends Error {
    constructor(message = "Um campo inválido foi enviado") {
        super(message); 
        this.errorMessage = message
        this.status = 400;
    }
}


module.exports = { CampoObrigatorioFaltandoError, InformacaoInvalidaError };
