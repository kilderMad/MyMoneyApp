const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {
    // cors
    if (req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']
            // token existe?
        if (!token) {
            return res.status(403).send({ errors: ['No token provided.'] })
        }
        //token é valido? comparacao com o segredo do .env
        jwt.verify(token, env.authSecret, function(err, decoded) {
            if (err) {
                //token invalido
                return res.status(403).send({
                    errors: ['Failed to authenticate token.']
                })
            } else {
                //tudo certo, proximo
                //req.decoded = decoded
                next()
            }
        })


    }

}