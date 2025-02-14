const Joi = require('joi');
const { CampoObrigatorioFaltandoError, InformacaoInvalidaError } = require("../error/validacao.error.js"); 

const postoColetaProdutoDTO = Joi.object({
    postoColetaId: Joi.string().uuid().required(),
    produtoId: Joi.string().uuid().required(),
    quantidade: Joi.number().integer().min(1).required(),
    observacao: Joi.string().max(255).optional().allow(null),
    validade: Joi.date().greater('now').required(),
}).unknown(true);

const validaPostagem = (req, res, next) => {
    try {
        const { error } = postoColetaProdutoDTO.validate(req.body);
        if (error) {
            const fieldName = error.details[0].path[0];
            if (error.details[0].message.includes("required")) {
                throw new CampoObrigatorioFaltandoError(`Campo obrigatório '${fieldName}' está faltando`);
            }

            throw new InformacaoInvalidaError(`O campo '${fieldName}' é inválido`);
        }

        next();
    } catch (error) {
        return res.status(error.status || 400).json({ "message": error.errorMessage || "Houve um erro ao validar a postagem" });
    }
};

module.exports = { validaPostagem };
