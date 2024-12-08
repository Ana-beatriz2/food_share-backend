const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secretKey = process.env.SECRET_KEY_JWT;

module.exports = {
    generateToken(userData) { 
        const { id, nome, email } = userData;

        const payload = { id, nome, email };

        const token = jwt.sign(payload, secretKey, 
            {expiresIn: '2h'}
        );

        return token;
    }
}