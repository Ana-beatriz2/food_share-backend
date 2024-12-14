class PostoColetaNaoEncontradoError extends Error {
    constructor(message = "Post de coleta não encontrado") {
        super(message); 
        this.errorMessage = message
        this.status = 404;
    }
}

class PropriedadePostoColetaError extends Error {
    constructor(message = "O usuário não é o dono do posto de coleta") {
        super(message); 
        this.errorMessage = message
        this.status = 403;
    }
}

module.exports = { PostoColetaNaoEncontradoError, PropriedadePostoColetaError }