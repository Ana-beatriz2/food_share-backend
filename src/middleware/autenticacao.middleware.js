const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next){
    try {

        const authToken = req.headers.authorization;
    
        if (!authToken) throw new TokenNaoIdentificado();
        
        const parts = authToken.split(" ");
    
        if (parts.length !== 2) throw new TokenInvalido();
    
        const [, token] = parts;
    
        jwt.verify(token, process.env.TOKEN_KEY, (error, data) => {
            if (error) throw error;
    
            req.user_id = { id: data.id, nome: data.nome, email: data.email};
            return next();
        })
    } catch (error) {
        return res.status(error.status || 401).json({ "message": error.errorMessage || "Houve um erro na autenticação" });
    }
}

module.exports = auth;