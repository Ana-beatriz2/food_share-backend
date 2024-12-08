class TokenNaoIdentificado extends Error {
    constructor(message = "Token não identificado!") {
        super(message); 
        this.errorMessage = message
        this.status = 401;
    }
}

class TokenInvalido extends Error {
    constructor(message = "Token inválido!") {
        super(message); 
        this.errorMessage = message
        this.status = 401;
    }
}