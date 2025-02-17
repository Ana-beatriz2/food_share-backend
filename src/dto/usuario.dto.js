const Joi = require('joi');
const { CampoObrigatorioFaltandoError, InformacaoInvalidaError } = require("../error/validacao.error.js"); 

const createUsuarioDTO = Joi.object({
  nome: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().max(150).required(),
  senha: Joi.string().min(6).max(255).required(),
  tipoUsuario: Joi.string().valid('doador', 'receptor').required(),
  telefone: Joi.string().max(15).optional().allow(null),
  bairro: Joi.string().max(255).optional().allow(null),
  cidade: Joi.string().max(255).optional().allow(null),
  logradouro: Joi.string().max(255).optional().allow(null),
  complemento: Joi.string().max(255).optional().allow(null),
  estado: Joi.string().length(2).optional().allow(null),
  cpf: Joi.string().min(11).max(14).optional().allow(null),
  cnpj: Joi.string().min(14).max(18).optional().allow(null),
});

const updateUsuarioDTO = Joi.object({
    nome: Joi.string().min(3).max(255).optional(),
    email: Joi.string().email().max(150).optional(),
    senha: Joi.string().min(6).max(255).optional(),
    telefone: Joi.string().max(15).optional(),
    bairro: Joi.string().max(255).optional(),
    cidade: Joi.string().max(255).optional(),
    logradouro: Joi.string().max(255).optional(),
    complemento: Joi.string().max(255).optional(),
    estado: Joi.string().length(2).optional(),
    cpf: Joi.string().min(11).max(14).optional(),
    cnpj: Joi.string().min(14).max(18).optional(),
    tipoUsuario: Joi.any().forbidden()
});

const validaCreateUsuario = (req, res, next) => {
    try {
        const { error } = createUsuarioDTO.validate(req.body);

        if (error) {
            const fieldName = error.details[0].path[0];
            if (error.details[0].message.includes("required")) {
                throw new CampoObrigatorioFaltandoError(`Campo obrigatório '${fieldName}' está faltando`);
            }
            throw new InformacaoInvalidaError(`O campo '${fieldName}' é inválido`);
        }

        next();
    } catch (error) {
        return res.status(error.status || 400).json({ "message": error.errorMessage || "Houve um erro ao validar o usuário" });
    }
};

const validaUpdateUsuario = (req, res, next) => {
    try {
        const { error } = updateUsuarioDTO.validate(req.body);

        if (error) {
            const fieldName = error.details[0].path[0];

            if (fieldName === 'tipoUsuario') {
                throw new InformacaoInvalidaError("O tipo do usuário não pode ser atualizado.");
            }

            throw new InformacaoInvalidaError(`O campo '${fieldName}' é inválido`);
        }

        next();
    } catch (error) {
        return res.status(error.status || 400).json({ "message": error.errorMessage || "Houve um erro ao validar o usuário" });
    }
};

module.exports = { validaCreateUsuario, validaUpdateUsuario };
