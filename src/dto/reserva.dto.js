const Joi = require('joi');
const { CampoObrigatorioFaltandoError, InformacaoInvalidaError } = require("../error/validacao.error.js"); 

const reservaDTO =  Joi.object({
    postoColetaId: Joi.string().uuid().optional(),  
    produtoId: Joi.string().uuid().required(),  
    observacao: Joi.string().max(255).optional(),
    entregue: Joi.boolean().default(false),
    dataRetirada: Joi.date().required(), 
    quantidade: Joi.number().integer().positive().required()  
});

const validaReserva = (req, res, next) => {
    try {
        const { error } = reservaDTO.validate(req.body);

        if (error) {
            const fieldName = error.details[0].path[0];
            if (error.details[0].message.includes("required")) {
                throw new CampoObrigatorioFaltandoError(`Campo obrigatório '${fieldName}' está faltando`);
            }

            throw new InformacaoInvalidaError(`O campo '${fieldName}' é inválido`);
        }

        next();
    } catch (error) {
        return res.status(error.status || 400).json({ "message": error.errorMessage || "Houve um erro ao validar o produto" });
    }
};

module.exports = { validaReserva };
