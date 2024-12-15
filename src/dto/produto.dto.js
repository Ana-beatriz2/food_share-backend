const Joi = require('joi');
const { CampoObrigatorioFaltandoError, InformacaoInvalidaError } = require("../error/validacao.error.js"); 

const produtoDTO = Joi.object({
    nome: Joi.string().required(),
    marca: Joi.string().optional(),
    tipo_alimento: Joi.string().optional()
});

const validaProduto = (req, res, next) => {
    try {
        const { error } = produtoDTO.validate(req.body);

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

module.exports = { validaProduto };
