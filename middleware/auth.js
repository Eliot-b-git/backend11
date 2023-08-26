const jwt = require('jsonwebtoken')


module.exports =  (req, res, next) => {
    try {

        const token = req.headers.authorization.split(' ')[1];
        // on récupere le headers et le couper en deux partie barrow et le token et on prend uniquement le token
        const decodedToken = jwt.verify(token, 'RAMDOM_TOKEN_SECRET')  // On le token mais il faut le decoded donc on passe la methode verify et on met la clé secret
        const userId = decodedToken.userId // On le decode et on prend le userId
        req.auth ={
            userId: userId 
        }
    } catch(error) {
        res.status(401).json({ error})
    }
};
