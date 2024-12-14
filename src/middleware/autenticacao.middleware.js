const jwt = require("jsonwebtoken");
const { TokenNaoIdentificado, TokenInvalido } = require("../error/jwt.error");
require("dotenv").config();

function auth(req, res, next){
    try {

        const authToken = req.headers.authorization;
    
        if (!authToken) throw new TokenNaoIdentificado();
        
        const parts = authToken.split(" ");
    
        if (parts.length !== 2) throw new TokenInvalido();
    
        const [, token] = parts;
    
        jwt.verify(token, process.env.SECRET_KEY_JWT, (error, data) => {
            if (error) throw error;
    
            req.userData = { id: data.id, nome: data.nome, email: data.email};
            return next();
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 401).json({ "message": error.errorMessage || error.message });
    }
}

module.exports = { auth };