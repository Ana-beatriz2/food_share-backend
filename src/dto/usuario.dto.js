const Joi = require('joi');
const { CampoObrigatorioFaltandoError, InformacaoInvalidaError } = require("../error/validacao.error.js"); 

const usuarioDTO = Joi.object({
  nome: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().max(150).required(),
  senha: Joi.string().min(6).max(255).required(),
  tipoUsuario: Joi.string().valid('doador', 'receptor').required(),
  telefone: Joi.string().max(15).optional(),
  bairro: Joi.string().max(255).optional(),
  cidade: Joi.string().max(255).optional(),
  logradouro: Joi.string().max(255).optional(),
  complemento: Joi.string().max(255).optional(),
  estado: Joi.string().length(2).optional(),
  cpf: Joi.string().max(14).optional(),
  cnpj: Joi.string().max(18).optional(),
});

const validaUsuario = (req, res, next) => {
    try {
        const { error } = usuarioDTO.validate(req.body);

        console.log(error);

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

module.exports = { validaUsuario };
