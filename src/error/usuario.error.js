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
        this.status = 404;
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
        this.status = 400;
    }
}

class UsuarioSemCpjOuCnpjError extends Error {
    constructor(message = "Cpnj ou cpf devem ser preenchidos") {
        super(message); 
        this.errorMessage = message
        this.status = 400;
    }
}

class UsuarioSemPermissaoDoador extends Error {
    constructor(message = "Usuário receptor não possui permissão para essa funcionalidade") {
        super(message); 
        this.errorMessage = message
        this.status = 403;
    }
}

class UsuarioSemPermissaoReceptor extends Error {
    constructor(message = "Usuário doador não possui permissão para essa funcionalidade") {
        super(message); 
        this.errorMessage = message
        this.status = 403;
    }
}


module.exports = { 
    LoginNaoEncontradoError, 
    SenhaInvalidaError, 
    UsuarioJaExistenteError, 
    UsuarioNaoEncontradoError, 
    UsuarioSemCpjOuCnpjError, 
    UsuarioSemPermissaoDoador,
    UsuarioSemPermissaoReceptor
};