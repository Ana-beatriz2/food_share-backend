const Joi = require('joi');
const { CampoObrigatorioFaltandoError, InformacaoInvalidaError } = require("../error/validacao.error.js"); 

const postoColetaDTO = Joi.object({
    id: Joi.string().uuid().optional(),
    nome: Joi.string().min(3).max(255).required(),
    tipo: Joi.string().min(3).max(50).required(),
    bairro: Joi.string().max(100).optional(),
    cidade: Joi.string().max(100).optional(),
    logradouro: Joi.string().max(255).optional(),
    complemento: Joi.string().max(255).optional(),
    estado: Joi.string().length(2).optional(),
    ponto_referencia: Joi.string().max(255).optional()
});

const validaPostoColeta = (req, res, next) => {
    try {
        const { error } = postoColetaDTO.validate(req.body);

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

module.exports = { validaPostoColeta };
