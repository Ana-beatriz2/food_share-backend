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

class PropriedadePostoColataError extends Error {
    constructor(message = "O posto de coleta inserido pertence a outro usuário") {
        super(message); 
        this.errorMessage = message
        this.status = 400;
    }
}

class PostagemJaExistenteError extends Error {
    constructor(message = "Já existe uma postagem ativa do produto inserio nesse posto de coleta") {
        super(message); 
        this.errorMessage = message
        this.status = 400;
    }
}

module.exports = { PostagemNaoEncontradaError, PropriedadePostagemError, PropriedadePostoColataError, PostagemJaExistenteError }