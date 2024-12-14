class PostagemNaoEncontradaError extends Error {
    constructor(message = "Postagem não encontrado") {
        super(message); 
        this.errorMessage = message
        this.status = 404;
    }
}

class PropriedadePostagemError extends Error {
    constructor(message = "O usuário não é o dono da postagem") {
        super(message); 
        this.errorMessage = message
        this.status = 403;
    }
}

module.exports = { PostagemNaoEncontradaError, PropriedadePostagemError }