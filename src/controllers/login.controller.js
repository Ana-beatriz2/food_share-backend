const loginService = require('../services/login.service');


module.exports = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;
    
            const login = await loginService.login(email, senha);
            return res.status(200).json(login);
        } catch (error) {
            return res.status(error.status || 500).json({ "message": error.errorMessage || "Houve um erro ao realizar o login"})
        }
    }
}