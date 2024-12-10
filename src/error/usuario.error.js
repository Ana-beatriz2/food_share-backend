class LoginNaoEncontradoError extends Error {
    constructor(message = "Email ou senha incorretos") {
        super(message); 
        this.errorMessage = message
        this.status = 401;
    }
}

class UsuarioNaoEncontradoError extends Error {
    constructor(message = "Usuário não encontrado") {
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

class UsuarioJaExistenteError extends Error {
    constructor(field = "campo", message = `O ${field} inserido já foi cadastrado`) {
        super(message); 
        this.errorMessage = message
        this.status = 401;
    }
}

module.exports = { LoginNaoEncontradoError, SenhaInvalidaError, UsuarioJaExistenteError, UsuarioNaoEncontradoError };