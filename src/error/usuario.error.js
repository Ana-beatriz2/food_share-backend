class UsuarioNaoEncontradoError extends Error {
    constructor(message = "Email ou senha incorretos") {
        super(message); 
        this.errorMessage = message
        this.status = 401;
    }
}

class SenhaInvalidaError extends Error {
    constructor(message = "Email ou senha incorretos") {
        super(message); 
        this.errorMessage = message
        this.status = 401;
    }
}

module.exports = { UsuarioNaoEncontradoError, SenhaInvalidaError };