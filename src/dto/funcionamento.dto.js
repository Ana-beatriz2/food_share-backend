const Joi = require('joi');
const { CampoObrigatorioFaltandoError, InformacaoInvalidaError } = require("../error/validacao.error.js"); 

const funcionamentoDTO = Joi.object({
    dia: Joi.string()
      .valid('segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo')
      .required(),
    hora_inicio: Joi.string()
      .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
      .required(),
    hora_fim: Joi.string()
      .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
      .required(),
    postoColetaId: Joi.string().uuid().required(),
  });

const validaFuncionamento = (req, res, next) => {
    try {
        const { error } = funcionamentoDTO.validate(req.body);

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

module.exports = { validaFuncionamento };
