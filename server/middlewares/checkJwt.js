const jwt = require('jsonwebtoken');
const config = require('../config/config')
const checkJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, config.jwt.secret, (err, user) => {
            if (err) {
                return res.sendStatus(401);
            }
            req.userId = user.userId;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = checkJwt;