class ProdutoNaoEncontradoError extends Error {
    constructor(message = "Produto não encontrado") {
        super(message); 
        this.errorMessage = message
        this.status = 404;
    }
}

module.exports = { ProdutoNaoEncontradoError }
