class ReservaNaoEcontradaError extends Error {
    constructor(message = "Reserva não encontrada") {
        super(message); 
        this.errorMessage = message
        this.status = 404;
    }
}

class PropriedadeReservaError extends Error {
    constructor(message = "O usuário não é o dono da reserva") {
        super(message); 
        this.errorMessage = message
        this.status = 403;
    }
}

class QuantidadeAlimentoAlteradaError extends Error {
    constructor(message = "Não é possível trocar a quantidade de alimentos reservados") {
        super(message); 
        this.errorMessage = message
        this.status = 400;
    }
}

module.exports = { ReservaNaoEcontradaError, PropriedadeReservaError, QuantidadeAlimentoAlteradaError };
