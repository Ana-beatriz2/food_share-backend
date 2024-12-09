const Joi = require('joi');
const { CampoObrigatorioFaltandoError, InformacaoInvalidaError } = require("../error/validacao.error.js"); 

const loginDTO = Joi.object({
  email: Joi.string().email().max(150).required(),
  senha: Joi.string().min(6).max(255).required()
});

const validaLogin = (req, res, next) => {
    try {
        const { error } = loginDTO.validate(req.body);

        if (error) {
            const fieldName = error.details[0].path[0];
            if (error.details[0].message.includes("required")) {
                throw new CampoObrigatorioFaltandoError(`Campo obrigatório '${fieldName}' está faltando`);
            }

            throw new InformacaoInvalidaError(`O campo '${fieldName}' é inválido`);
        }

        next();
    } catch (error) {
        return res.status(error.status).json(error);
    }
};

module.exports = { validaLogin };
